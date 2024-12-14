import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import apiUrl from "../utils/GetApiUrl";
import Loading from "../elements/Loading";

export default function DetailProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${apiUrl}/products/${id}`);
        setProduct(response.data.product);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleBuyNow = () => {
    const email = "astroman6569@gmail.com";
    const subject = "Interested in purchasing";
    const body = `
    Dear Seller,

    I am interested in purchasing the ${product.name}.

    (ID: ${product._id})
    
    Could you please provide me with more details about the product, including pricing and availability?

    Thank you,
    Shikharji
  `;

    window.open(
      `mailto:${email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`,
      "_blank"
    );
  };

  if (!product) {
    return <Loading />;
  }
  return (
    <>
      <SingleProduct product={product} handleBuyNow={handleBuyNow} />
    </>
  );
}

export function SingleProduct({ product, handleBuyNow }) {
  return (
    <>
      <div className="single-product">
        <div className="row">
          <div className="col-2">
            <img src={product.img} id="ProductImg" alt="Product" />
            <div className="small-img-row">
              {product.moreImage.map((image, index) => (
                <div className="small-img-col" key={index}>
                  <img src={image} alt={`Lost Product ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
          <div className="col-2">
            <p className="price">₹ {product.price}</p>
            <h1>{product.name}</h1>
            <p>{product.description}</p>

            <button className="buy-now-btn" onClick={handleBuyNow}>
              Buy now..
            </button>

            <p className="product-detail">Product Details 👇</p>
            <br />
            <p>{product.details}</p>
          </div>
        </div>
      </div>
    </>
  );
}
