
interface Props {
  fecha: string,
  texto?: string
}




const Result = ({ fecha, texto = "" }: Props) => {
  return (
    <p className="text-6xl italic">
      <span id={`resultado-${fecha}`} className="text-[#854DFF]"> --
      </span>
      {texto}
    </p>
  )
}

export default Result
