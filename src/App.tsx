import Button from "./components/button"
import Input from "./components/input"
import Result from "./components/result"

import Flecha from './assets/icon-arrow.svg'
import Form from "./components/form"
import { Card } from "./components/card"
import { fechas, resultados } from "./utils/data"

const App = () => {
  return (
    <div className="bg-[#DBDBDB] min-h-dvh pt-4 flex m-auto flex-col">
      <Card>
        <Form>
          {
            fechas.map(({ fecha, placeholder, id }) => (
              <Input key={id} fecha={fecha} placeholder={placeholder} />
            ))
          }
        </Form>
        <Button name="resultado" urlImg={Flecha} />
        <section className="flex flex-col mx-auto" id="resultado">
          {
            resultados.map((resultado) => (
              <Result key={resultado.id} fecha={resultado.fecha} texto={resultado.texto} />
            ))
          }
        </section>
      </Card>
    </div>
  )
}

export default App
