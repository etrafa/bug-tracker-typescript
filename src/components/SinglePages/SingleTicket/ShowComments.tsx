import { IComment } from "../../../Interfaces/Firebase-Interfaces/CommentInterface";

interface ShowCommentsProps {
  ticketCommentsData: IComment[];
}

const ShowComments = ({ ticketCommentsData }: ShowCommentsProps) => {
  return (
    <section className="w-full lg:w-11/12 min-h-[5rem] bg-gray-50 mx-auto my-4">
      {ticketCommentsData.map((ticket) => {
        const { createdAt, comment, commentOwner } = ticket;

        //* FORMAT FIREBASE TIMESTAMP TO READABLE FORMAT
        const createdAtToDate = createdAt.toDate();
        const createdAtJSON = JSON.stringify(createdAtToDate).slice(1, 11);

        return (
          <div>
            <header className="flex justify-end">
              <p className="mx-6 mt-2 text-gray-400 text-sm">{commentOwner}</p>
              <p className="mx-6 mt-2 text-gray-400 text-sm">{createdAtJSON}</p>
            </header>
            <p className="text-left m-4 font-bold text-sm">{comment}</p>
          </div>
        );
      })}
    </section>
  );
};
export default ShowComments;
