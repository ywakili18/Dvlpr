import { useEffect } from 'react'

const NewComment = () => {
  return (
    <div class="sm:mx-auto sm:w-full sm:max-w-md text-center">
      <div>
        <form>
          <div>
            <div class="mt-10">
              <textarea
                maxLength="255"
                name="postContent"
                type="text"
                placeholder="what are your thoughts, fellow DVLPR?"
                class="text-center bg-gradient-to-b 
                from-white-regular to-coolGray-light 
            border border-coolGray-light py-8 px-4
            rounded-lg shadow-sm focus:outline-none 
            focus:border-purple-regular focus:ring-1 
            focus:ring-purple-regular md:w-full text-s"
              />
            </div>

            <div class="mt-1">
              <button
                type="submit"
                class="bg-purple-regular  hover:bg-pink-hot text-coolGray-light font-bold py-3 px-5 rounded-full"
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
