interface Props { 
  children:React.ReactNode
}

//HOC 

const Form = ({children}:Props) => {
  return (
    <form className="flex flex-col md:flex-row mx-auto gap-6 mt-6" id="formulario">
      {children}
    </form>
  )
}

export default Form
