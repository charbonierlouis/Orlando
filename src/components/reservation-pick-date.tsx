interface Props {
  value?: string;
  onChange: (time: string) => void;
}

export const ReservationPickDate = ({ value, onChange }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input
      type="time"
      value={value}
      className="input input-bordered w-full max-w-xs text-black font-semibold"
      onChange={handleChange}
    />
  );
};
