import { Post as PostType } from '/graphql/generated-types'

const Post: React.FC<PostType> = ({ title, body, comments }) => {
  return (
    <div>
      <h1>
        {title}
      </h1>

      <p>
        {body}
      </p>

      <p>{comments.length} comments</p>
    </div>

  )
}

export default Post
