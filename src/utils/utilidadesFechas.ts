// NaN -> not a number -> no es un  numero

import type { ResultadoEstadoFecha } from "../interfaces/IFecha"


export const validarInput = (valor = "", min = 0, max = 0): boolean => {
  const numero = parseInt(valor, 10)
  return !isNaN(numero) && numero >= min && numero <= max
}

export const calcularEdad = (dia: string , mes: string | number, anho: string | number ): ResultadoEstadoFecha  => {

  const fechaNacimiento = new Date(+anho, mes as number, parseInt(dia))
  const fechaActual = new Date()

  let edadAhnos = fechaActual.getFullYear() - fechaNacimiento.getFullYear()
  let edadMeses = fechaActual.getMonth() - fechaNacimiento.getMonth()
  let edadDias = fechaActual.getDate() - fechaNacimiento.getDate()

  if (edadDias < 0) {
    edadMeses--
    edadDias += new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 0).getDate()
  }

  if (edadMeses < 0) {
    edadAhnos--
    edadMeses += 12
  }

  return {
    anho: edadAhnos,
    mes: edadMeses,
    dia: edadDias
  }

}

// hoc 

//hooks = funciones 
