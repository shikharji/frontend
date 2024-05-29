import Products from "./Products";

export default function Shop() {
  return (
    <>
      <Products />
      <ProductRating />
    </>
  );
}

export function ProductRating() {
  return (
    <>
      <div id="product-rating">
        <div class="col-3">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            over
          </p>

          <img
            src="https://github.com/khushiTyagi12/Ecommerce-Website-Design/blob/main/user-1.png?raw=true"
            alt="lost"
          />
          <h3>Khushi</h3>
        </div>

        <div class="col-3">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            over
          </p>

          <img
            src="https://github.com/khushiTyagi12/Ecommerce-Website-Design/blob/main/user-2.png?raw=true"
            alt="lost"
          />
          <h3>Gaurav</h3>
        </div>

        <div class="col-3">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            over
          </p>
          <img
            src="https://github.com/khushiTyagi12/Ecommerce-Website-Design/blob/main/user-3.png?raw=true"
            alt="lost"
          />
          <h3>Ananya</h3>
        </div>
      </div>
    </>
  );
}
