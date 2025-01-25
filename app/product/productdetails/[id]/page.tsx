import React from 'react'

const Product = async ({params}: {params: {id: string}} ) => {
  const id = (await params).id ;  
  return (
    <div>
      product details {id}
    </div>
  )
}

export default Product
