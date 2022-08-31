interface ModalTicketOptionsProps {
  ticketOptionsLabel: string;
  ticketOptionsChangeHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  ticketOptionsData: string[];
}

const ModalTicketOptions = ({
  ticketOptionsLabel,
  ticketOptionsChangeHandler,
  ticketOptionsData,
}: ModalTicketOptionsProps) => {
  return (
    <label className="text-center text-sm ">
      <span className="font-black">{ticketOptionsLabel}</span>
      <select
        className="flex border w-32 h-8 text-center mt-1.5"
        onChange={ticketOptionsChangeHandler}
      >
        {ticketOptionsData.map((ticket, index) => (
          <option key={index}>{ticket}</option>
        ))}
      </select>
    </label>
  );
};
export default ModalTicketOptions;
