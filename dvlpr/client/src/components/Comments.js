import axios from 'axios'
import Client from '../services/api'
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
  // console.log('this is' + comments)
  return (
    <div class="mt-40 sm:mx-auto sm:w-full sm:max-w-md text-center">
      <div class="bg-gradient-to-b from-coolGray-light to-purple-light py-2 px-10 shadow rounded-lg md:w-full">
        <ul>
          <h1 class="text-purple-light text-2xl font-bold font-brand">
            Comments section
          </h1>
          {comments.map((comment) => (
            <div class="mt-10 border">
              <li key={comment.Id}>{comment.commentsAndUsers.userName}</li>
              <li key={comment.Id}>{comment.commentContent}</li>
              <li key={comment.Id}>{comment.createdAt}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Comments
