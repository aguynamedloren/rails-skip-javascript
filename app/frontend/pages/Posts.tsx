import { useAllPostsQuery } from '/graphql/generated-types'
import Post from '/components/Post'

const Posts: React.FC = () => {
  const { data, loading } = useAllPostsQuery()

  if (loading) {
    return <span>Loading...</span>
  }

  return (
    <div className='flex flex-col text-black h-screen'>
      <div className='lg:hidden border-4 border-green rounded-full ml-4 mt-4 absolute' />

      <main className='flex justify-center w-full px-4 pt-16 h-screen'>
        <div className='max-w-4xl'>
          {data.posts.map((post) => (
            <Post {...post} key={post.uuid} />
          ))}

        </div>
      </main>
    </div>
  )
}

export default Posts
