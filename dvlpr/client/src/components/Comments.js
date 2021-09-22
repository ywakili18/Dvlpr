import axios from 'axios'
import Client from '../services/api'
import Comment from './Comment'
import { useState, useEffect } from 'react'

const Comments = (data) => {
  const [comments, manageComments] = useState([])
  // fetch all comments
  useEffect(() => {
    async function getComments() {
      const res = await Client.get('/comments', data)
      console.log(res)
      manageComments(res.data)
    }
    getComments()
  }, [])
  console.log('this is' + comments)
  return (
    <div class="mt-40 sm:mx-auto sm:w-full sm:max-w-md text-center">
      <ul>
        {/* listing through comments and attaching userId  */}
        {comments.map((comment) => (
          <div>
            {/* <Comment /> */}
            <li key={comment.Id}>{comment.commentsAndUsers.userName}</li>
            <li key={comment.Id}>{comment.commentContent}</li>
            <li key={comment.Id}>{comment.createdAt}</li>
          </div>
        ))}
      </ul>
    </div>
  )
}
export default Comments
