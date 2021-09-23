import { useState } from 'react'
import Comments from './Comments'
import NewComment from './NewComment'

const PostCard = (props) => {
  const [edit, toggleEdit] = useState(false)

  return (
    <div>
      <div>{props.content}</div>
      <div>timestamp {props.timeStamp}</div>
      <div>
        <div>
          {props.comments.map((comment) => (
            <Comments
              key={comment.id}
              comments={comment.commentContent}
              timeStamp={comment.createdAt}
              user={comment.commentsAndUsers.userName}
            />
          ))}
        </div>
        <NewComment />
      </div>
    </div>
  )
}

export default PostCard
