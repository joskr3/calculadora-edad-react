interface Props {
  fecha: string,
  texto: string
}

const Result = ({ fecha, texto = "" }: Props) => {
  return (
    <p className="text-6xl italic">
      {texto}
      <span id={`resultado-${fecha}`} className="text-[#854DFF]"> {fecha}
      </span>
    </p>
  )
}

export default Result
