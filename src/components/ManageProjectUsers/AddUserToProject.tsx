interface ManageProjectUsersProps {
  setIsAssignedUserModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddUserToProject = ({
  setIsAssignedUserModalOpen,
}: ManageProjectUsersProps) => {
  return (
    <button
      onClick={() => setIsAssignedUserModalOpen(true)}
      className="flex mt-6 font-sm text-gray-500 group hover:text-gray-400"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2 group-hover:stroke-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="gray"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
        />
      </svg>
      Add Users
    </button>
  );
};
export default AddUserToProject;
