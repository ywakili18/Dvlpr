import NewPost from './NewPost'
import NewComment from './NewComment'

export default function PostCard(props) {
  return (
    <div>
      <div>
        <div>{props.userName}</div>
        <div>{props.content}</div>
        <NewComment />
      </div>
    </div>
  )
}
