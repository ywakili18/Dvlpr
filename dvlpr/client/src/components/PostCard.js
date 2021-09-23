import { useState } from 'react'
import Comments from './Comments'
import NewComment from './NewComment'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    userState: state.userState
  }
}

const PostCard = (props) => {
  const [edit, toggleEdit] = useState(false)
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
            {props.userState.user.id === props.userId ? (
              <button type="submit">Save Edit</button>
            ) : (
              <div></div>
            )}
          </form>
        </div>
      ) : (
        <div>
          <div>{props.content}</div>
          {props.userState.user.id === props.userId ? (
            <button
              onClick={() => {
                toggleEdit(true)
              }}
            >
              Edit
            </button>
          ) : (
            <div></div>
          )}
        </div>
      )}
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

export default connect(mapStateToProps, null)(PostCard)
