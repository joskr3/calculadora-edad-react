
const App = () => {
  return (
    <div className="bg-[#DBDBDB] min-h-dvh pt-4 flex m-auto flex-col">
      <main className="bg-white m-auto pb-16 p-4 rounded-t-lg rounded-l-lg rounded-br-[100px] flex flex-col h-2/3 md:max-w-xl justify-center self-center mx-4">
        <form className="flex flex-col md:flex-row mx-auto gap-6 mt-6" id="formulario">
          <div className="flex flex-col flex-1">
            <label id="label-dia" className="text-[#716F6F]" htmlFor="dia">DÍA</label>
            <input className="border w-full border-solid border-[#DBDBDB] h-12 px-4 text-black rounded-md" type="number" id="dia" name="dia" placeholder="DD" required />
          </div>

          <div className="flex flex-col flex-1">
            <label id="label-mes" className="text-[#716F6F]" htmlFor="mes">MES</label>
            <input className="border w-full border-solid border-[#DBDBDB] h-12 px-4 text-black rounded-md" type="number" id="mes" name="mes" placeholder="MM" required />
          </div>

          <div className="flex flex-col flex-1">
            <label id="label-anho" className="text-[#716F6F]" htmlFor="anho">AÑO</label>
            <input className="border w-full border-solid border-[#DBDBDB] h-12 px-4 text-black rounded-md" type="number" id="anho" name="anho" placeholder="AAAA" required />
          </div>
        </form>

        <button type="submit" id="boton-resultado" className="m-auto">
          <img id="calcular-edad" src="/src/assets/icon-arrow.svg" alt="flecha" className="bg-[#854DFF] rounded-full flex mx-auto my-8 p-4 cursor-pointer" />
        </button>

        <section className="flex flex-col mx-auto" id="resultado">
          <p className="text-6xl italic"><span id="resultado-anhos" className="text-[#854DFF]">--</span> años</p>
          <p className="text-6xl italic"><span id="resultado-meses" className="text-[#854DFF]">--</span> meses</p>
          <p className="text-6xl italic"><span id="resultado-dias" className="text-[#854DFF]">--</span> días</p>
        </section>
      </main>
    </div>
  )
}

export default App
