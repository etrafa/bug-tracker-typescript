interface ModalLabelProps {
  label: string;
  placeholder: string;
  labelName: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ModalLabel = (props: ModalLabelProps) => {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        {props.label}
      </label>
      <input
        onChange={props.handleChange}
        type="text"
        name={props.labelName}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        placeholder={props.placeholder}
      />
    </div>
  );
};
export default ModalLabel;
