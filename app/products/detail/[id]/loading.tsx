import Image from "next/image"

const Loading = () => {
  return (
    <div className="w-full h-full min-h-screen flex justify-center items-center">
      {/* <Image src="/loading.gif" alt="loading" width={100} height={100} className="animate-pulse"/> */}
      <p className="animate-pulse">Cargando</p>
    </div>
  )
}

export default Loading