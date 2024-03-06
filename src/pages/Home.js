const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "฿900",
    color: "Black",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://st.bigc-cs.com/cdn-cgi/image/format=webp,quality=90/public/media/catalog/product/39/20/2000007839939/2000007839939_1-20230815112928-.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "฿950",
    color: "White",
  
  },
  {
    id: 3,
    name: "Long-Sleeved Shirt",
    href: "#",
    imageSrc:
      "https://st.bigc-cs.com/cdn-cgi/image/format=webp,quality=90/public/media/catalog/product/46/20/2000007855946/2000007855946_1-20230914103244-.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "฿1,200",
    color: "",
  },
  {
    id: 4,
    name: "Sports Shirt",
    href: "#",
    imageSrc:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/99fe4c92631743739099ac84003dfb0d_9366/Adicolor_Classics_3-Stripes_GN2913_01_laydown.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "฿1,200",
    color: "",
  },
];

export default function Home() {
  return (
    <>
      <div className="bg-pink-100">
        
        <div className="mt-6 grid  gap-x-2 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-4">
          <input
            type="text"
            name="price"
            id="price"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Search"
          />
        </div>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
