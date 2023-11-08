//! TODO: cambiar interface
interface ParamsProps {
    params: {
        slug: string;
    };
}

//! TODO: Crear componente product detail para mostrar detalle
const DetailPage = ({params}: ParamsProps) => {

    const {slug} = params
    return (
      <div>
        <h1>Detail Page</h1>
        <p>{slug}</p>
      </div>
    );
  }
  
  export default DetailPage;




