import qr from "./GooglePay_QR.jpg";

export default function Qrcode() {
  return (
    <>
      <div className="qrcode-container">
        <img id="qrcode" src={qr} alt="Qr code" />
      </div>
    </>
  );
}
