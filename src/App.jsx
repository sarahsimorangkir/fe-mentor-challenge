import Barcode from "./assets/image-qr-code.png";

function App() {
  return (
    <div className="App">
      <div className="Card">
        <img src={Barcode} alt="" />
        <div className="CardDetails">
          <p className="Caption">
            Improve your frontend skills by building projects
          </p>
          <p className="CapDetails">
            Scan the QR Code to visit Frontend Mentor and take your coding
            skills to the next level!
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
