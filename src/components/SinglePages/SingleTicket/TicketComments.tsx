import { IComment } from "../../../Interfaces/Firebase-Interfaces/CommentInterface";

interface TicketCommentsProps extends IComment {}

const TicketComments = ({
  belongedTicketID,
  comment,
  commentOwner,
  createdAt,
}: TicketCommentsProps) => {
  //* convert firebase time to DATE
  const createdJSON = createdAt.toDate();
  const createdAtString = JSON.stringify(createdJSON).slice(1, 11);

  return (
    <div className="w-full lg:w-6/12 max-w-2xl text-center overflow-auto mt-12 mx-auto lg:border-l-2">
      <section className="w-full lg:w-11/12 min-h-[5rem] bg-gray-50 mx-auto my-4">
        <header className="flex justify-end">
          <p className="mx-6 mt-2 text-gray-400 text-sm">{commentOwner}</p>
          <p className="mx-6 mt-2 text-gray-400 text-sm">{createdAtString}</p>
        </header>
        <article className="text-left m-4">{comment}</article>
      </section>
    </div>
  );
};
export default TicketComments;
