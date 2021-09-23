import { useState } from 'react'
import Comments from './Comments'
import NewComment from './NewComment'

const PostCard = (props) => {
  const [edit, toggleEdit] = useState(true)
  const [postContent, setPostContent] = useState(props.content)

  const handleChange = (e) => {
    setPostContent(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    toggleEdit(false)
  }

  return (
    <div>
      {edit ? (
        <div>
          <form onSubmit={handleSubmit}>
            <textarea
              maxLength="255"
              name="postContent"
              type="text"
              value={postContent}
              onChange={handleChange}
            />
          </form>
        </div>
      ) : (
        <div>{props.content}</div>
      )}
      <div>timestamp {props.timeStamp}</div>
      {edit ? (
        <button
          type="button"
          onClick={() => {
            toggleEdit(true)
          }}
        >
          Save Edit
        </button>
      ) : (
        <button type="submit">Edit</button>
      )}
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
