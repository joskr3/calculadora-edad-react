interface Props {
  name: string,
  urlImg: string,
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({name,urlImg,onClick}:Props) => {
  return (
    <button type="submit" id={`boton-${name}`}  className="m-auto" onClick={onClick}>
      <img id="calcular-edad" src={urlImg} alt="flecha" className="bg-[#854DFF] rounded-full flex mx-auto my-8 p-4 cursor-pointer" />
    </button>
  )
}

export default Button
