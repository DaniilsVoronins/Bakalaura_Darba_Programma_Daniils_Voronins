import "./App.css";
import LandingPage from "./screens/landingPage";
import Index from "./components/hersection";
import About from "./components/about";
import Web from "./components/web";
import Picture from "./components/web/picture";
import Perfect from "./components/perfect"
import Brand from "./components/brand";
import Timer from "./components/timer";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <About />
      <Web />
      <Picture />
      <Perfect />
      <Brand />
      <Timer />
      <Footer />
    </div>
  );
}

export default App;
