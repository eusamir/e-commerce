import { api } from '@/data/api'
import { Product } from '@/data/types/product'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api('/products/featured', {
    next: {
      // durante 1 hora os dados vão ser mantidos em cache
      revalidate: 60 * 60,
    },
  })

  const products = await response.json()

  return products
}
export const metadata: Metadata = {
  title: 'Home',
}

// memoizacao: é quando o react impede que a mesma requisição com os mesmos parametros seja feita duas vezes
// se eu quero carregar dados de uma requisição que eu já fiz, para não carregar a proxima do zero com os mesmos dados eu ultilizo do cache

export default async function Home() {
  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts()
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        key={highlightedProduct.id}
        href={`/product/${highlightedProduct.slug}`}
        className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-start"
      >
        <Image
          src={highlightedProduct.image}
          className="group-hover:scale-105 transition-transform duration-500"
          width={960}
          height={960}
          alt=""
          quality={100}
        />

        <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">{highlightedProduct.title}</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            {highlightedProduct.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </span>
        </div>
      </Link>
      {otherProducts.map((product) => {
        return (
          <>
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className="group relative transition-transform duration-500 col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-start"
            >
              <Image
                src={product.image}
                className="group-hover:scale-105 transition-transform duration-500 "
                width={960}
                height={960}
                alt=""
                quality={100}
              />
              <div className="absolute bottom-28 right-10 h-12 flex border-2 items-center gap-2 max-width[280px] rounded-full border-zinc-500 bg-black/60 p-1 pl-5">
                <span className="text-sm truncate">{product.title}</span>
                <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                  {product.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                </span>
              </div>
            </Link>
          </>
        )
      })}
    </div>
  )
}
