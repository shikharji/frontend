import qr from "./GooglePay_QR.png";

export default function Qrcode() {
  return (
    <>
      <div className="qrcode-container">
        <img id="qrcode" src={qr} alt="Qr code" />
      </div>
    </>
  );
}
