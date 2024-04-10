import data from '../data.json'

export async function GET(){
    const featuredProducts = data.products.filter((e)=> e.featured === true)
    
    return Response.json({featuredProducts});
}