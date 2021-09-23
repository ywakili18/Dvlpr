const Comments = (props) => {
  return (
    <div class="mt-40 sm:mx-auto sm:w-full sm:max-w-md text-center resize border borrounded-md">
      <div class="bg-gradient-to-b from-coolGray-light to-purple-light py-2 px-10 shadow rounded-lg md:w-full">
        <ul>
          <div class="border text-center ">
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
