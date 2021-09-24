import { useState } from 'react'
import Comments from './Comments'
import NewComment from './NewComment'
import { connect } from 'react-redux'
import Client from '../services/api'

const mapStateToProps = (state) => {
  return {
    userState: state.userState
  }
}

const PostCard = (props) => {
  const [edit, toggleEdit] = useState(false)
  const [postContent, setPostContent] = useState(props.content)
  const [deleteCheck, toggleDeleteCheck] = useState(false)

  const handleChange = (e) => {
    setPostContent(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await Client.put(`/posts/${props.id}`, {
      postContent: postContent
    })
    toggleEdit(false)
  }

  const handleDelete = async (e) => {
    const res = await Client.delete(`/posts/${props.id}`)
    console.log(res)
    window.location.reload()
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
          <div>{postContent}</div>
          {props.userState.user.id === props.userId ? (
            <div>
              <button
                onClick={() => {
                  toggleEdit(true)
                }}
              >
                Edit
              </button>
              {deleteCheck ? (
                <div>
                  <div>Are You Sure?</div>
                  <button type="button" onClick={handleDelete}>
                    DELETE
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    toggleDeleteCheck(true)
                  }}
                >
                  Delete Post
                </button>
              )}
            </div>
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
