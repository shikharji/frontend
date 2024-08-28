import axios from "axios";
import "./Products.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import apiUrl from "../utils/GetApiUrl";

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${apiUrl}/products`);
        if (response.data && Array.isArray(response.data.products)) {
          setProducts(response.data.products);
        } else {
          console.error("Unexpected response format:", response.data);
          setProducts([]); // Ensuring products is set to an empty array if response is not as expected
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]); // Ensuring products is set to an empty array in case of error
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div id="product-main-container">
        <div class="row">
          {products.length > 0 ? (
            products.map((product) => (
              <SingleProduct key={product._id} product={product} />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
}

export function SingleProduct({ product }) {
  return (
    <>
      <div>
        <div class="product-container">
          <div class="tag-sale"></div>
          <div class="product-image">
            <span class="hover-link"></span>
            <Link to={`/products/${product._id}`} class="product-link">
              view details
            </Link>
            <img src={product.img} alt={product.name} />
          </div>
          <div class="product-description">
            <div class="product-label">
              <div class="product-name">
                <h1>{product.name}</h1>
                <p class="price">${product.price}</p>
                <p>{product.description}</p>
              </div>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                iusto facilis dignissimos maiores molestias adipisci obcaecati .
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
