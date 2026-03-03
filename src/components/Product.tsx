import { useEffect, useState } from "react";
import { getAllProductsApi } from "../services/ProductService";

interface Product {
  id: number;
  name: string;
  price: number;
}

function Product() {
  const [productList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProductsApi();
        setProductList(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="container mt-5">
        <h2>Product List</h2>
        <table className="table table-striped table-hover">
          <thead className="table">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {productList.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Product;
