const NewPost = (props) => {
  return (
    <div class="sm:mt-36 sm:mx-auto text-center sm:w-1/2">
      <div class=" sm:py-2 sm:px-48 shadow rounded-s md:w-full">
        <form onSubmit={props.onSubmit}>
          <div>
            <div>
              <textarea
                maxLength="255"
                name="postContent"
                type="text"
                placeholder="Write a post"
                onChange={props.onChange}
                value={props.value}
                class="text-center 
            resize-none shadow-sm focus:outline-none 
            md:w-auto -ml-2 border-t-0 border-r-0 border-l-0 border-b-2 border-purple-400 bg-transparent"
              />
            </div>

            <div class="mt-1"></div>
            <button
              type="submit"
              class="bg-purple-regular
                hover:bg-pink-hot text-coolGray-light font-bold py-3 px-5 rounded-full  "
            >
              Add post
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default NewPost
