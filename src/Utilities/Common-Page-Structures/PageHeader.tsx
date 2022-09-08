export interface PageHeaderProps {
  pageHeader: string;
}

const PageHeader = ({ pageHeader }: PageHeaderProps) => {
  return (
    <h1 className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-11/12 h-14 bg-fbFillColor text-center text-white text-2xl font-bold pt-3">
      {pageHeader}
    </h1>
  );
};
export default PageHeader;
