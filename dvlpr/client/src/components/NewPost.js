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
            border border-coolGray-light resize border rounded-md
            rounded-lg shadow-sm focus:outline-none 
            focus:border-purple-regular focus:ring-1 
            focus:ring-purple-regular md:w-auto -ml-2"
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
