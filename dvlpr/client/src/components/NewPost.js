const NewPost = (props) => {
  return (
    <div class="sm:mt-36 sm:mx-auto text-center sm:w-px-48">
      <div class=" sm:py-2 px-48 shadow rounded-s md:w-full">
        {/* <h1 class="text-purple-light text-2xl font-bold font-brand">
          New post
        </h1> */}
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
                class="text-center  to-coolGray-light 
            border border-coolGray-light mt-2
            rounded-lg shadow-sm focus:outline-none 
            focus:border-purple-regular focus:ring-1 
            focus:ring-purple-regular md:w-full text-s"
              />
            </div>

            <div class="mt-1"></div>
            <button
              type="submit"
              class="bg-purple-regular
                hover:bg-pink-hot text-coolGray-light font-bold py-3 px-5 rounded-full "
            >
              +
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default NewPost
