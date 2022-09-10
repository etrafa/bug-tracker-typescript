const TicketComments = () => {
  return (
    <div className="w-full lg:w-6/12 max-w-2xl text-center overflow-auto mt-12 mx-auto lg:border-l-2">
      <h2 className="font-bold text-lg">Comments</h2>
      {/* {dbData === undefined ||
    (dbData?.lenght === 0 ? null : <TicketPagination dbData={dbData} />)} */}
      {/* //*CREATE A NEW COMMENT */}
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
    </div>
  );
};
export default TicketComments;
