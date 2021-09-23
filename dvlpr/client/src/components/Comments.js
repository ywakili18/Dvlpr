import axios from 'axios'
import Client from '../services/api'
import { useState, useEffect } from 'react'

const Comments = (props) => {
  // const [comments, manageComments] = useState([])
  // fetch all comments
  // useEffect(() => {
  //   async function getComments() {
  //     const res = await Client.get('/comments', data)

  //     manageComments(res.data)
  //   }
  //   getComments()
  // }, [])
  // console.log('this is' + comments)
  return (
    <div class="mt-40 sm:mx-auto sm:w-full sm:max-w-md text-center resize border borrounded-md">
      <div class="bg-gradient-to-b from-coolGray-light to-purple-light py-2 px-10 shadow rounded-lg md:w-full">
        <ul>
          <h1 class="text-purple-light text-2xl font-bold font-brand">
            Comments section
          </h1>
          <div
            class="mt-10 border text-center bg-gradient-to-b 
            from-white-regular to-coolGray-light 
        border border-coolGray-light py-8 px-4
        rounded-lg shadow-sm focus:outline-none 
        focus:border-purple-regular focus:ring-1 
        focus:ring-purple-regular md:w-full text-s"
          >
            <li>{props.user}</li>
            <li>{props.comments}</li>
            <li>timestamp{props.timeStamp}</li>
          </div>
        </ul>
      </div>
    </div>
  )
}
export default Comments
