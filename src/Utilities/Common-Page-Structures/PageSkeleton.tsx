import PageHeader, { PageHeaderProps } from "./PageHeader";
import PageSearch, { PageSearchProps } from "./PageSearch";
import PageTable, { PageTableProps } from "./PageTable";

interface PageSkeletonProps
  extends PageHeaderProps,
    PageSearchProps,
    PageTableProps {}

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
          />
        </div>
      </div>
    </div>
  );
};

export default PageSkeleton;
