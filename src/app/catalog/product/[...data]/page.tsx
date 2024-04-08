'use client'
interface ProductProps{
  params:{
    data: string[]
  }
}


// server compoents => a gente não usa js no lado do cliente
// client components => o js é enviado ao navegador (cliente)

// streaming SSR => ler/escrever dados de forma parcial + server-side rendering

// renderizar um componente pelo lado do servidor de forma parcial ^
//na mesma requisição trás o loading e os dados reais 

// com a flag use cliente vai passar pelo processo de HIDRATAÇÃO convertendo para um htlm interativo
// com o use cliente ele so carrega o javascript que o componente vai ultilizar

export default async function Product({params}: ProductProps){

  await new Promise(resolve=> setTimeout(resolve, 1000))

  const [productId, size, color] = params.data

  return(
    <div>
      <p>Product: {productId}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>
    </div>
  )
}