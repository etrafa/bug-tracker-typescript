// const ShowComments = () => {

import { IComment } from "../../../Interfaces/Firebase-Interfaces/CommentInterface";

const ShowComments = ({ comment, commentOwner, createdAt }: IComment) => {
  //   //* convert firebase time to DATE
  const createdJSON = createdAt.toDate();
  const createdAtString = JSON.stringify(createdJSON).slice(1, 11);

  return (
    <section className="w-full lg:w-11/12 min-h-[5rem] bg-gray-50 mx-auto my-4">
      <header className="flex justify-end">
        <p className="mx-6 mt-2 text-gray-400 text-sm">{commentOwner}</p>
        <p className="mx-6 mt-2 text-gray-400 text-sm">{createdAtString}</p>
      </header>
      <p className="text-left m-4 font-bold text-sm">{comment}</p>
    </section>
  );
};
export default ShowComments;
