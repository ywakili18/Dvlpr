import { FaCommentDots } from 'react-icons/fa'
import { useState } from 'react'
import Client from '../services/api'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    userState: state.userState
  }
}

const NewComment = (props) => {
  const [newComment, setNewComment] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await Client.post(`/comments/${props.userId}`, {
      postId: props.postId,
      commentContent: newComment
    })
  }

  const handleChange = (e) => {
    setNewComment(e.target.value)
  }

  return (
    <div
      class="
      
      sm:mx-auto 
      text-center 
      border rounded-lg"
    >
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <div class="text-md sm:mx-auto">
              <input
                onChange={handleChange}
                value={newComment}
                maxLength="255"
                name="postContent"
                type="text"
                placeholder="what are your thoughts?"
                class="
                sm:mx-auto
                focus:outline-none 
                bg-transparent 
                text-purple-300
                flex-grow h-16"
              />

              <button
                type="submit"
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
              >
                <FaCommentDots />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
export default connect(mapStateToProps, null)(NewComment)
