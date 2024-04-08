//podemos deixar a função assincrona para o serverside aguardar 

// se um componente for async posso carregar dados dentro do componente 
//só é feito quando precisa carregar dados assim que o componente for exibido em tela(SERVERSIDE)
// essa situação acima resolve o problema de indexação 

export default async function Home() {
  await new Promise(resolve=> setTimeout(resolve, 1000))

  const response = await fetch('https://api.github.com/users/eusamir')
  const user = await response.json()
  return (
    <pre>{JSON.stringify(user, null, 2)}</pre>
  )
}
