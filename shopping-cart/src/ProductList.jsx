import ProductCard from "./ProductCard";

function ProductList({ products, cart, onAdd }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => {
          const inCartQty = cart.find((c) => c.id === product.id)?.qty ?? 0

          return (
            <ProductCard
              key={product.id}
              product={product}
              inCartQty={inCartQty}
              onAdd={onAdd}
            />
          )
        })}
      </div>
    </div>
  );
}

export default ProductList;