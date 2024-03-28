import logo from "./logo.svg";
import "./App.css";
import QrImage from "./image-qr-code.png";

function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="qr-container">
          <div class="qr-image">
            <img src={QrImage} alt="" />
          </div>
          <div class="qr-info">
            <p class="title">
              Improve your front-end skills by building projects
            </p>
            <p class="paragraph">
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
