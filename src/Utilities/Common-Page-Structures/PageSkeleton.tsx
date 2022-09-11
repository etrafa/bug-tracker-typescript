//components && interfaces
import LoadSpinner from "../LoadSpinner";
import PageHeader, { PageHeaderProps } from "./PageHeader";
import PagePagination from "./PagePagination";
import PageSearch, { PageSearchProps } from "./PageSearch";
import PageTable, { PageTableProps } from "./PageTable";
import { PageTableBodyForProjectsProps } from "./PageTableBodyForProjects";

interface PageSkeletonProps
  extends PageHeaderProps,
    PageSearchProps,
    PageTableProps,
    PageTableBodyForProjectsProps {
  pageType: string;
  NO_DATA_MESSAGE: string;
  loading: boolean;
}

const PageSkeleton = (props: PageSkeletonProps) => {
  return (
    <div className="w-full lg:w-[calc(100%_-_16rem)] ml-auto mb-6">
      <div className="w-11/12 mx-auto mt-24 relative border border-black lg:min-h-[20rem]">
        <PageHeader pageHeader={props.pageHeader} />
        <div className="pl-4 pt-12">
          {/* {//* WHILE LOADING SHOW THIS MESSAGE */}
          {props.loading && <LoadSpinner />}

          {/* //*IF DATA LENGTH IS 0 OR FETCHING DATA FAILS SHOW THIS MESSAGE */}

          {/* {props.data && props.data.length === 0 && (
            <p className="mt-36 text-center font-bold">
              {props.NO_DATA_MESSAGE}
            </p>
          )} */}

          {props.loading === false && props.data?.length === 0 && (
            <p className="mt-36 text-center font-bold">
              {props.NO_DATA_MESSAGE}
            </p>
          )}

          {/* //*IF DATA LENGTH IS LARGER THAN 1 SHOW THIS MESSAGE */}

          {props.data && props.data.length > 1 && (
            <div>
              <PageSearch
                searchInputPlaceHolder={props.searchInputPlaceHolder}
                searchInputChangeHandler={props.searchInputChangeHandler}
              />
              <PageTable
                firstTableHeader={props.firstTableHeader}
                secondTableHeader={props.secondTableHeader}
                thirdTableHeader={props.thirdTableHeader}
                fourthTableHeader={props.fourthTableHeader}
                fifthTableHeader={props.fifthTableHeader}
                pageType={props.pageType}
                data={props.data}
                searchTerm={props.searchTerm}
                ITEM_PER_PAGE={props.ITEM_PER_PAGE}
                pageNumber={props.pageNumber}
                setPageNumber={props.setPageNumber}
              />

              {/* //*IF DATA LENGTH IS LARGER THAN ITEM-PER-PAGE SHOW PAGINATION OPTIONS */}
              {props.data && props.data.length > props.ITEM_PER_PAGE && (
                <PagePagination
                  ITEM_PER_PAGE={props.ITEM_PER_PAGE}
                  data={props?.data}
                  pageNumber={props.pageNumber}
                  setPageNumber={props.setPageNumber}
                  searchTerm={props.searchTerm}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageSkeleton;
