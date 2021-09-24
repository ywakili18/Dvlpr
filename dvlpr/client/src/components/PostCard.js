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
    <div
      // feed container
      class="
          sm:mx-auto 
          sm:w-full 
          sm:max-w-md 
          text-center 
          text-sm 
          border 
          sm:py-2
          border-black"
    >
      {/* edit post */}
      {edit ? (
        <div>
          <form
            class="mt-10 flex items-center sm:mx-auto border"
            onSubmit={handleSubmit}
          >
            <textarea
              maxLength="255"
              name="postContent"
              placeholder="edit your post here"
              type="text"
              values={postContent}
              onChange={handleChange}
              class="
              w-1/2
              text-gray-900
                sm:px-2
                sm:py-2
                sm:mx-auto
                sm:mr-4
                focus:outline-none 
                border 
                border-t-0
                border-l-0
                border-r-0
                border-b-2
                rounded-lg   
                border-purple-500  
                bg-white 
                text-center
                "
            />
            {/* save edit button */}
            {props.userState.user.id === props.userId ? (
              <button
                class="h-8
                  px-4 
                  text-indigo-100 
                  transition-colors 
                  duration-150 
                  bg-gray-400 rounded-lg 
                  focus:shadow-outline 
                  hover:bg-purple-800 
                  transition duration-500
                  sm:mr-20"
                type="submit"
              >
                Save edit
              </button>
            ) : (
              <div></div>
            )}
          </form>
        </div>
      ) : (
        // delete button
        <div>
          <div
            class=" w-1/2
                text-purple-100
                sm:px-2
                sm:py-2
                sm:mx-auto
                focus:outline-none 
                border 
                border-t-2
                border-l-2
                border-r-2
                border-b-2
                rounded-lg   
                bg-gray-400 
                italic
                text-center
                "
          >
            {postContent}
          </div>
          {props.userState.user.id === props.userId ? (
            <div>
              <button
                class="
                h-8
                px-6
                mt-2
                text-indigo-100 
                transition-colors 
                duration-150 
                bg-gray-400 rounded-lg 
                focus:shadow-outline 
                hover:bg-purple-800 
                transition duration-500
                sm:mx-auto"
                onClick={() => {
                  toggleEdit(true)
                }}
              >
                Edit Post
              </button>
              {deleteCheck ? (
                <div>
                  <div
                    class="
                  text-black italic font-bold
                  sm:px-2
                  sm:py-4
                  sm:mx-auto
                  text-center"
                  ></div>
                  <button
                    class="
                    h-8
                    px-4 
                    text-indigo-100 
                    transition-colors 
                    duration-150 
                    bg-gray-400 rounded-lg 
                    focus:shadow-outline 
                    hover:bg-purple-800 
                    transition duration-500
                    sm:mx-auto"
                    type="button"
                    onClick={handleDelete}
                  >
                    Confirm to delete
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  class="h-8
                  px-4 
                  text-indigo-100 
                  transition-colors 
                  duration-150 
                  bg-gray-400 rounded-lg 
                  focus:shadow-outline 
                  hover:bg-purple-800 
                  transition duration-500
                  "
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
