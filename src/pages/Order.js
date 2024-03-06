import React from 'react';

const product = {
  name: 'Long-Sleeved Shirt',
  price: '฿1,200',
  href: '#',
  breadcrumbs: [],
  images: [
    {
      src: 'https://st.bigc-cs.com/cdn-cgi/image/format=webp,quality=90/public/media/catalog/product/46/20/2000007855946/2000007855946_1-20230914103244-.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
  ],
};

export default function Order() {
  return (
   
    <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
      <div className="aspect-h-4 aspect-w-1 overflow-hidden rounded-lg lg:block">
        <div className="aspect-h-4 aspect-w-1 overflow-hidden rounded-lg flex justify-center">
        
          <img
            src={product.images[0].src}
            alt={product.images[0].alt}
            className="h-full w-full object-cover flex justify-center object-center"
            
          />
        </div>
      </div>
      <div className="lg:col-span-2 mt-6">
        <h3 className="text-2xl font-extrabold tracking-tight text-gray-900">
          {product.name}
        </h3>
        <h1 className="mt-3 text-base text-gray-500"> {product.price}</h1>
        {/* You can add more details here based on your product object */}
      </div>
    </div>
  );
}
