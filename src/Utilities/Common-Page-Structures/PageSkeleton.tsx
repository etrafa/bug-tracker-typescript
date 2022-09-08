import PageHeader, { PageHeaderProps } from "./PageHeader";
import PageSearch, { PageSearchProps } from "./PageSearch";
import PageTable, { PageTableProps } from "./PageTable";
import { PageTableBodyForProjectsProps } from "./PageTableBodyForProjects";

interface PageSkeletonProps
  extends PageHeaderProps,
    PageSearchProps,
    PageTableProps,
    PageTableBodyForProjectsProps {
  pageType: string;
}

const PageSkeleton = (props: PageSkeletonProps) => {
  return (
    <div className="w-full lg:w-[calc(100%_-_16rem)] ml-auto mb-6">
      <div className="w-11/12 mx-auto mt-24 relative border border-black">
        <PageHeader pageHeader={props.pageHeader} />
        <div className="pl-4 pt-12">
          <PageSearch searchInputPlaceHolder={props.searchInputPlaceHolder} />
          <PageTable
            firstTableHeader={props.firstTableHeader}
            secondTableHeader={props.secondTableHeader}
            thirdTableHeader={props.thirdTableHeader}
            fourthTableHeader={props.fourthTableHeader}
            fifthTableHeader={props.fifthTableHeader}
            pageType={props.pageType}
            data={props.data}
          />
        </div>
      </div>
    </div>
  );
};

export default PageSkeleton;
