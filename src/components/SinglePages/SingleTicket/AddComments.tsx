const AddComments = () => {
  return (
    <div className="flex gap-x-4 underline cursor-pointer justify-end px-4 py-2 hover:text-gray-500">
      <span>Add Comment</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
        />
      </svg>
    </div>
  );
};
export default AddComments;

{
  /* <div>
<textarea
  className="border w-11/12 h-12 pl-2 pt-2 text-sm mt-6"
  typeof="text"
  // value={commentInput}
  placeholder="Write a comment."
  // onChange={(e) => setCommentInput(e.target.value)} // save user's comment to state to send database
/>
<button
  // onClick={(e) => submitHandler(e)}
  type="submit"
  // className={
  //   isFormValidated
  //     ? "bg-fbFillColor text-white font-bold w-28 h-8 mx-auto hover:bg-blue-400"
  //     : "bg-gray-700 pointer-events-none text-white font-bold w-28 h-8 mx-auto hover:bg-blue-400"
  // }
>
  Submit
</button>
</div> */
}
