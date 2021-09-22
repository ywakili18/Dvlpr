import { useEffect } from 'react'

const NewPost = () => {
  return (
    <div class="mt-40 sm:mx-auto sm:w-full sm:max-w-md text-center">
      <div class="bg-gradient-to-b from-coolGray-light to-purple-light py-20 px-5 shadow rounded-lg md:w-full">
        <h1 class="text-purple-light text-2xl font-bold font-brand">
          New post
        </h1>
        <form>
          <div>
            <div class="mt-10">
              <textarea
                maxLength="255"
                name="postContent"
                type="text"
                placeholder="add post here"
                class="text-center bg-gradient-to-b 
            from-white-regular to-coolGray-light 
            border border-coolGray-light py-16 px-4
            rounded-lg shadow-sm focus:outline-none 
            focus:border-purple-regular focus:ring-1 
            focus:ring-purple-regular md:w-full text-s"
              />
            </div>

            <div class="mt-1">
              <button
                type="submit"
                class="bg-purple-regular  text-coolGray-light font-bold  px-2 rounded-full text-2xl"
              >
                +
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
export default NewPost
