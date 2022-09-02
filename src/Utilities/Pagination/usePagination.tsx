import { useState } from "react";
import { Link } from "react-router-dom";
import { IProject } from "../../Interfaces/Firebase-Interfaces/ProjectInterface";
import { ITicketsRoot } from "../../Interfaces/Firebase-Interfaces/TicketsInterface";

interface usePaginationProps {
  itemPerPage: number;
  searchTermProps: string;
  data: [];
  searchValue: string;
}

export const usePagination = (props: usePaginationProps) => {
  const [pageNumber, setPageNumber] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  let ITEM_PER_PAGE = props.itemPerPage;
  const pagesVisited = pageNumber * ITEM_PER_PAGE;
  const pageCounted = Math.ceil(props.data.length / ITEM_PER_PAGE);
};
