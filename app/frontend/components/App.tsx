import { withProvider } from './graphqlProvider'
import { useAllPostsQuery, Post } from '../graphql/generated-types'

const PostComponent: React.FC<Post> = ({ title, body }) => {
  return (
    <div className='w-full mb-20'>
      <h1 className='text-2xl lg:text-4xl font-serif mt-7 leading-tight'>
        {title}
      </h1>

      <p className='font-sans mt-10 pr-0 lg:pr-14 font-light leading-7'>
        {body}
      </p>
    </div>

  )
}

const App: React.FC = () => {
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
            <PostComponent {...post} key={post.uuid} />
          ))}

        </div>
      </main>
    </div>
  )
}

export default withProvider(App)
