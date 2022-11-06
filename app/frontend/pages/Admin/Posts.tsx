import { useRef } from 'react'

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  IconButton,
  HStack,
  Icon,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  useDisclosure,
  useToast,
  Link
} from '@chakra-ui/react'
import {
  useAllPostsQuery,
  useDestroyPostMutation,
  AllPostsDocument
} from '/graphql/generated-types'
import { TbPencil, TbTrashX } from 'react-icons/tb'

import { Link as RouterLink } from 'react-router-dom'

const PostAlertDiaglog: React.FC = ({
  isOpen,
  cancelRef,
  onClose,
  postUuid
}) => {
  const toast = useToast()

  const [destroyPost, { loading, error }] = useDestroyPostMutation({
    onCompleted: () => {
      toast({
        position: 'top',
        title: 'Post deleted',
        status: 'success',
        duration: 3000,
        isClosable: true
      })
    },
    refetchQueries: [{ query: AllPostsDocument }]
  })

  const onDelete = () =>
    destroyPost({ variables: { input: { uuid: postUuid } } })

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize='lg' fontWeight='bold'>
            Delete Post
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure? You can't undo this action afterwards.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='red' onClick={onDelete} ml={3}>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}

const PostRow: React.FC<{ title: string, uuid: string }> = ({
  title,
  uuid
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef()

  return (
    <>
      <Tr _hover={{ background: 'gray.50' }}>
        <Td>{title}</Td>
        <Td>
          <HStack spacing={3} fontSize='large'>
            <Link as={RouterLink} to={`/admin/posts/${uuid}`}>
              <Icon as={TbPencil} />
            </Link>
            <IconButton onClick={onOpen} variant='unstyled'>
              <Icon as={TbTrashX} />
            </IconButton>
          </HStack>
        </Td>
      </Tr>

      <PostAlertDiaglog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        postUuid={uuid}
      />
    </>
  )
}

const PostTable: React.FC = () => {
  const { data, loading } = useAllPostsQuery()

  if (loading) {
    return <span>Loading...</span>
  }
  return (
    <TableContainer>
      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th>Post</Th>
            <Th />
          </Tr>
        </Thead>
        <Tbody>
          {data.posts.map(post => (
            <PostRow key={post.uuid} {...post} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default PostTable
