export default async function Catalog(){
  await new Promise(response=>setTimeout(response,2000))

  return <h1>Catalogo</h1>

}