interface CategoryProps {
  params: {
    category: string;
  };
}
export default async function Category(props: CategoryProps) {
  //const { category } = props.params;
  const getParams = async () => {
    // Aquí podrías tener lógica para obtener los parámetros de manera asincrónica
    return props.params;
  };
  const {category} = await getParams();
  console.log(category);
  //console.log(props.params.category);
  return <h1> Ruta - Categoria dinamica xD {category}</h1>;
}
