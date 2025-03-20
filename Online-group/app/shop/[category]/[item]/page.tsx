// Handles routes like: /shop/electronics/laptop
export default function Product({ params }: { 
  params: { 
    category: string,
    item: string 
  } 
}) {
  return (
    <div>
      <h1>{params.item}</h1>
      <p>Category: {params.category}</p>
    </div>
  )
} 