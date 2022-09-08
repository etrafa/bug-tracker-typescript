interface PageSkeletonProps {
  pageHeader: string;
}

const PageSkeleton = (props: PageSkeletonProps) => {
  return (
    <div className="w-full lg:w-[calc(100%_-_16rem)] ml-auto mb-6">
      <div className="w-11/12 mx-auto mt-24 relative border border-black">
        <h1 className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-11/12 h-14 bg-fbFillColor text-center text-white text-2xl font-bold pt-3">
          {props.pageHeader}
        </h1>
      </div>
    </div>
  );
};

export default PageSkeleton;
