interface CategoryProps {
  params: {
    categories: string[];
    searchParams?: string;
  };
}
export default async function Category(props: CategoryProps) {
  //const { category } = props.params;
  const getParams = async () => {
    // Aquí podrías tener lógica para obtener los parámetros de manera asincrónica
    return props.params;
  };
  const { categories } = await getParams();
  console.log(categories);
  //console.log(props.params.category);
  return <h1> Ruta - Categoria dinamica xD {categories}</h1>;
}
