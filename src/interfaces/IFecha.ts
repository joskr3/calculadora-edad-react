export interface Fecha {
  fecha: string,
  placeholder: string,
  id: number
}

export interface Resultado {
  fecha: string,
  texto: string,
  id: number
}


export interface ResultadoEstadoFecha {
  dia: string | number,
  mes: string | number,
  anho: string | number
}
