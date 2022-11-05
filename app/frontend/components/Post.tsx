import { Post as PostType } from '/graphql/generated-types'

const Post: React.FC<PostType> = ({ title, body, comments }) => {
  return (
    <div className='w-full mb-20'>
      <h1 className='text-2xl lg:text-4xl font-serif mt-7 leading-tight'>
        {title}
      </h1>

      <p className='font-sans mt-10 pr-0 lg:pr-14 font-light leading-7'>
        {body}
      </p>

      <p className='mt-4'>{comments.length} comments</p>
    </div>

  )
}

export default Post
