interface Props {
  children: React.ReactNode
}

export const Card = ({ children }: Props) => {
  return (
    <main className="bg-white m-auto pb-16 p-4 rounded-t-lg rounded-l-lg rounded-br-[100px] flex flex-col h-2/3 md:max-w-xl justify-center self-center mx-4">
      {children}
    </main>
  )
}

