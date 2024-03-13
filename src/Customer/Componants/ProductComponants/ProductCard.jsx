import { green } from '@mui/material/colors';
import React from 'react'

function ProductCard({product,title}) {
    const products=product;
  return (
    <div className="bg-white">
    <div className="mx-auto max-w-2xl px-2 py-2 lg:max-w-7xl lg:px-5">
      <div className="mt-1 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src={product.image}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-top lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex flex-col justify-start">
              <h2 className="text-lg text-gray-700 font-semibold text-left">
                {product.brand}
              </h2>

              <h3 className="text-sm text-gray-600 text-start font-medium">
                <a href={product.href}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.title}
                </a>
              </h3>
              <h3 className="text-lg text-gray-400 text-start font-medium tracking-wider">
                {product.color}
              </h3>
              <div className="flex justify-start mt-1">
                <span className='font-semibold'>{"₹"+product.price}</span>
                <span className='text-clip pl-2 text-gray-400 line-through'>{"₹"+product.discountedPrice}</span>
                <span className='text-green-400 font-semibold px-1'>{" "+product.discountPersent}<span className='text-green-400 font-semibold'>% Off</span></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default ProductCard