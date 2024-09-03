import Button from "./components/button"
import Input from "./components/input"
import Result from "./components/result"

import Flecha from './assets/icon-arrow.svg'
import Form from "./components/form"
import { Card } from "./components/card"
// import { fechas, resultados } from "./utils/data"
import useCalcularEdad from "./hooks/usecalcularEdad"

const App = () => {

  const { dia, mes, anho, resultado, setDia, setMes, setAnho, handleCalcularEdad } = useCalcularEdad()

  return (
    <div className="bg-[#DBDBDB] min-h-dvh pt-4 flex m-auto flex-col">
      <Card>
        <Form>
          {/* {
            fechas.map(({ fecha, placeholder, id }) => (
              <Input key={id} fecha={fecha} placeholder={placeholder} />
            ))
          } */}
          <Input fecha={dia} placeholder="DD" value={dia} onChange={(evento) => setDia(evento.target.value)} />
          <Input fecha={mes} placeholder="MM" value={mes} onChange={(evento) => setMes(evento.target.value)} />
          <Input fecha={anho} placeholder="YYYY" value={anho} onChange={(evento) => setAnho(evento.target.value)} />
        </Form>
        <Button name="resultado" urlImg={Flecha} onClick={handleCalcularEdad} />
        <section className="flex flex-col mx-auto" id="resultado">
          {/* {
            resultados.map((resultado) => (
              <Result key={resultado.id} fecha={resultado.fecha} texto={resultado.texto} />
            ))
          } */}
          <Result fecha="anhos" texto={resultado?.anho.toString() || "--"} />
          <Result fecha="meses" texto={resultado?.mes.toString() || "--"} />
          <Result fecha="dias" texto={resultado?.dia.toString() || "--"} />
        </section>
      </Card>
    </div>
  )
}

export default App
