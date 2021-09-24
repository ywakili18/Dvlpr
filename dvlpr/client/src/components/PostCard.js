import { useState } from 'react'
import NewComment from './NewComment'
import Comments from './Comments'
import { connect } from 'react-redux'
import Client from '../services/api'
import Moment from 'react-moment'
import { BiCommentEdit, BiCommentMinus, BiBadgeCheck } from 'react-icons/bi'

import 'moment-timezone'
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
    props.toggleupdate(() => {
      return props.update ? false : true
    })
  }

  return (
    <div class="text-left">
      {/* edit post */}
      {edit ? (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              maxLength="255"
              name="postContent"
              placeholder="edit your post here"
              type="text"
              values={postContent}
              onChange={handleChange}
              class="
              text-white
                sm:mx-auto
                focus:outline-none 
                bg-transparent 
                text-center
                text-purple-300
                "
            />
            {/* save edit button */}
            {props.userState.user.id === props.userId ? (
              <button
                class="  
              h-8
              p-2
              px-8   
              text-indigo-100 
              transition-colors 
              duration-150 
              bg-gray-400 rounded-lg 
              focus:shadow-outline 
              hover:bg-purple-800 
              transition duration-500"
                type="submit"
              >
                <BiBadgeCheck />
              </button>
            ) : (
              <div></div>
            )}
          </form>
        </div>
      ) : (
        <div>
          <div class="text-indigo-300 italic">{postContent}</div>
          {props.userState.user.id === props.userId ? (
            <div>
              <button
                class="
                h-8
                p-2
                px-8   
                text-indigo-100 
                transition-colors 
                duration-150 
                bg-gray-400 rounded-lg 
                focus:shadow-outline 
                hover:bg-purple-800 
                transition duration-500"
                onClick={() => {
                  toggleEdit(true)
                }}
              >
                <BiCommentEdit />
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
                    p-2
                    px-8   
                    text-indigo-100 
                    transition-colors 
                    duration-150 
                    bg-gray-400 rounded-lg 
                    focus:shadow-outline 
                    hover:bg-purple-800 
                    transition duration-500 text-md italic"
                    type="button"
                    onClick={handleDelete}
                  >
                    Confirm to delete
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  class=" 
                  h-8
                  p-2
                  px-8   
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
                  <BiCommentMinus />
                </button>
              )}
            </div>
          ) : (
            <div></div>
          )}
        </div>
      )}
      <div class="py-2 italic content-center">
        {/* timestamp */}
        @
        <Moment
          date={props.timeStamp}
          format="MM-DD-YYYY hh:mm:ss"
          className="text-sm"
          tz="America/Los_Angeles"
        />
      </div>
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
          <div className="bg-gray-900 shadow-2xl">
            <NewComment />
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, null)(PostCard)
