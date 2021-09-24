import { useEffect } from 'react'

const NewComment = () => {
  return (
    <div class="sm:mx-auto sm:w-full sm:max-w-md text-center text-sm">
      <div>
        <form>
          <div>
            <div class="mt-10 flex items-center sm:mx-auto">
              <textarea
                maxLength="255"
                name="postContent"
                type="text"
                placeholder="what are your thoughts?"
                class="
                w-1/2
                text-gray-900
                sm:mr-2
                sm:ml-28
                focus:outline-none 
                border 
                border-t-2
                border-l-2
                border-r-2
                border-b-2
                rounded-lg   
                bg-white 
                text-center"
              />

              <button
                type="submit"
                class="
                h-8
                px-4 
                text-indigo-100 
                transition-colors 
                duration-150 
                bg-gray-400 
                rounded-lg 
                focus:shadow-outline 
                hover:bg-purple-800 
                transition duration-500
                sm:mx-auto
                "
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
export default NewComment
