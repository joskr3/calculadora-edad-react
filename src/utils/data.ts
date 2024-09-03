import type { Fecha, Resultado } from "../interfaces/IFecha"

export const fechas: Fecha[] = [
  {
    fecha: "dia",
    placeholder: "DD",
    id: 1,
  },
  {
    fecha: "mes",
    placeholder: "MM",
    id: 2
  },
  {
    fecha: "año",
    placeholder: "YYYY",
    id: 3
  }
]

export const resultados: Resultado[] = [{
  fecha: "anhos",
  texto: "años",
  id: 4
},
{
  fecha: "meses",
  texto: "meses",
  id: 5
},
{
  fecha: "dias",
  texto: "dias",
  id: 6
}]
