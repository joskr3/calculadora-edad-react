import { useState } from "react";
import { calcularEdad, validarInput } from "../utils/utilidadesFechas";
import type { ResultadoEstadoFecha } from "../interfaces/IFecha";

const useCalcularEdad = () => {
  const [dia, setDia] = useState('')
  const [mes, setMes] = useState('')
  const [anho, setAnho] = useState('')
  const [resultado, setResultado] = useState<ResultadoEstadoFecha>()

  const handleCalcularEdad = () => {
    const diaValido = validarInput(dia, 1, 31)
    const mesValido = validarInput(mes, 1, 12)
    const anhoValido = validarInput(anho, 1, new Date().getFullYear())

    if (!diaValido || !mesValido || !anhoValido) {
      alert("Por favor, ingrese una fecha válida")
      return
    }

    const edad = calcularEdad(dia, +mes, +anho)
    setResultado(edad)
  }
  return {
    dia,
    mes,
    anho,
    resultado,
    setDia,
    setMes,
    setAnho,
    handleCalcularEdad
  }

}

export default useCalcularEdad
