import ProductCart from "@/components/products/ProductCart"
import prisma from "@/src/lib/prisma"


async function getProducts(category: string) {
  const products = await prisma.product.findMany({
    where: {
      category: {
        slug: category
      }
    }
  })

  return products
}


export default async function OrderPage({params}: {params: {category:string}}) {
  const products = await getProducts(params.category)

  return (
    <>
      <div className=" grid grid-cols-1 lg:grid-cols-3 2xl_grid-cols-3 gap-4 items-star">
        {products.map(product => (
          <ProductCart 
            key= {product.id}
            product={product}
          />
        ))}
      </div>
    </>
  )
}
