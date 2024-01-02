import data from '../data.json'

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  // eslint-disable-next-line prettier/prettier
  const featuredProducts = data.products.filter(product => product.featured)

  return Response.json(featuredProducts)
}

// bff (back-end for front-end)
