import { useAllPostsQuery } from '/graphql/generated-types'
import Post from '/components/Post'

const Posts: React.FC = () => {
  const { data, loading } = useAllPostsQuery()

  if (loading) {
    return <span>Loading...</span>
  }

  return (
    <>
      {data.posts.map((post) => (
        <Post {...post} key={post.uuid} />
      ))}
    </>
  )
}

export default Posts
