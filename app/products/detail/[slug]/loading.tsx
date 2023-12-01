import Image from "next/image"

const Loading = () => {
  return (
    <div className="w-full h-full min-h-screen flex justify-center items-center">
      <p className="animate-pulse">Cargando</p>
    </div>
  )
}

export default Loading