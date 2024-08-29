import Button from "./components/button"
import Input from "./components/input"
import Result from "./components/result"

import Flecha from './assets/icon-arrow.svg'
import Form from "./components/form"
import { Card } from "./components/card"

const App = () => {
  return (
    <div className="bg-[#DBDBDB] min-h-dvh pt-4 flex m-auto flex-col">
      <Card>
        <Form>
          <Input fecha="dia" placeholder="DD" />
          <Input fecha="mes" placeholder="MM" />
          <Input fecha="año" placeholder="YYYY" />
        </Form>
        <Button name="resultado" urlImg={Flecha} />
        <section className="flex flex-col mx-auto" id="resultado">
          <Result fecha="anhos" texto=" años" />
          <Result fecha="meses" texto=" meses" />
          <Result fecha="dias" texto=" dias" />
        </section>
      </Card>
    </div>
  )
}

export default App
