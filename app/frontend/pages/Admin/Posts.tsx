import {
  HStack,
  Icon,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  background
} from '@chakra-ui/react'
import { useAllPostsQuery } from '/graphql/generated-types'
import { TbPencil, TbTrashX } from 'react-icons/tb'

const Admin: React.FC = () => {
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
          {data.posts.map(({ title, uuid }) => (
            <Tr key={uuid} _hover={{ background: 'gray.50' }}>
              <Td>{title}</Td>
              <Td>
                <HStack spacing={3} fontSize='large'>
                  <Icon as={TbPencil} />
                  <Icon as={TbTrashX} />
                </HStack>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default Admin
