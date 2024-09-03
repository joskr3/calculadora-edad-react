interface Props {
  fecha: string,
  placeholder: string
}

const Input = ({ fecha, placeholder }: Props) => {
  return (
    <div className="flex flex-col flex-1">
      <label id={`label-${fecha}`} className="text-[#716F6F]" htmlFor={`${fecha}`}>{fecha.toUpperCase()}</label>
      <input className="border w-full border-solid border-[#DBDBDB] h-12 px-4 text-black rounded-md" type="number" id={`${fecha}`} name={`${fecha}`} placeholder={placeholder || "DD"} required />
    </div>
  )
}

export default Input
