import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRcodegenereter() {
  const [qrcode, setqrcode] = useState("");
  const [input, setinput] = useState("");
 

  function handlegeneretegr() {
    setqrcode(input);

  }
  return (
    <div className="container">
      <h1>QR code genereator</h1>
      <div style={{alignItems:"center",justifyContent:"center"}}>
        <input
          onClick={(e) => setinput(e.target.value)}
          type="text"
          name="gr-code"
          placeholder="Enter the value"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handlegeneretegr}
        >
          Generete
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrcode} size={400} bgColor="#ffff" />
      </div>
    </div>
  );
}
