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

  return (
    <div>
      <ul>
        {/* listing through comments  */}
        {comments.map((comment) => (
          <li key={comment.Id}>
            {comment.userId}
            {comment.commentContent}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Comments
