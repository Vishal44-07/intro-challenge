import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Image from "./components/Inage";

function App() {
  return (
    <div className="main-body">
      <Navbar />
      <div className="flex-container row box">
        <div class="flex-child col-lg-6 col-md-6 col-sm-12">
          <Body />
        </div>

        <div class="flex-child col-lg-6 col-md-6 col-sm-12">
          <Image />
        </div>
      </div>
    </div>
  );
}

export default App;
