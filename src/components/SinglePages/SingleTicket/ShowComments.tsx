//react
import { useState } from "react";

//components
import PagePagination from "../../../Utilities/Common-Page-Structures/PagePagination";

//interfaces
import { IComment } from "../../../Interfaces/Firebase-Interfaces/CommentInterface";

interface ShowCommentsProps {
  ticketCommentsData: IComment[];
}

const ShowComments = ({ ticketCommentsData }: ShowCommentsProps) => {
  const [pageNumber, setPageNumber] = useState(0); //react pagination

  //* PAGINATION
  const COMMENTS_PER_PAGE = 3;
  const pagesVisited = pageNumber * COMMENTS_PER_PAGE;

  const showComments = ticketCommentsData
    .slice(pagesVisited, pagesVisited + COMMENTS_PER_PAGE)
    .map((ticket) => {
      const { createdAt, comment, commentOwner } = ticket;

      //* FORMAT FIREBASE TIMESTAMP TO READABLE FORMAT
      const createdAtToDate = createdAt.toDate();
      const createdAtJSON = JSON.stringify(createdAtToDate).slice(1, 11);

      return (
        <div>
          <header className="flex justify-end mt">
            <p className="mx-6 mt-2 text-gray-400 text-sm">{commentOwner}</p>
            <p className="mx-6 mt-2 text-gray-400 text-sm">{createdAtJSON}</p>
          </header>
          <p className="text-left m-4 font-bold text-sm">{comment}</p>
          <hr />
        </div>
      );
    });

  //* ----------

  return (
    <section className="w-full lg:w-11/12 min-h-[5rem] bg-gray-50 mx-auto my-4">
      {showComments}

      {/* //*IF DATA IS LARGER THAN COMMENT PER PAGE SHOW PAGINATION OPTIONS */}
      {ticketCommentsData.length > COMMENTS_PER_PAGE && (
        <PagePagination
          ITEM_PER_PAGE={COMMENTS_PER_PAGE} //show 3 comments per page
          pageNumber={pageNumber} //initial page number is 0
          setPageNumber={setPageNumber} //react pagination number
          commentData={ticketCommentsData} //data which is shown.
          searchTerm="" //not necessary for this component
        />
      )}
    </section>
  );
};
export default ShowComments;
