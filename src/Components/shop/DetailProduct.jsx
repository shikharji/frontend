import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function DetailProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/products/${id}`
        );
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
    return <p>Loading...</p>;
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
              <div className="small-img-col">
                <img
                  src="https://github.com/khushiTyagi12/Ecommerce-Website-Design/blob/main/gallery-1.jpg?raw=true"
                  alt="Product"
                />
              </div>
              <div className="small-img-col">
                <img
                  src="https://github.com/khushiTyagi12/Ecommerce-Website-Design/blob/main/gallery-2.jpg?raw=true"
                  alt="Product"
                />
              </div>
              <div className="small-img-col">
                <img
                  src="https://github.com/khushiTyagi12/Ecommerce-Website-Design/blob/main/gallery-3.jpg?raw=true"
                  alt="Product"
                />
              </div>
              <div className="small-img-col">
                <img
                  src="https://github.com/khushiTyagi12/Ecommerce-Website-Design/blob/main/gallery-4.jpg?raw=true"
                  alt="Product"
                />
              </div>
            </div>
          </div>
          <div className="col-2">
            <h1>{product.name}</h1>
            <h4>{product.description}</h4>
            <h3>${product.price}</h3>

            <button className="buy-now-btn" onClick={handleBuyNow}>
              Buy now..
            </button>
            <h3>
              Product Details <i className="fa fa-indent"></i>
            </h3>
            <br />
            <p>
              Give your summer wardrobe a style upgrade with the HRX Men's
              Active T-shirt. Team it with a pair of shorts for your morning
              workout or denims for an evening out with the guys.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
