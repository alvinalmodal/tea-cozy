import "./App.css";
import Mission from "./components/mission";
import Header from "./components/header";
import Featured from "./components/featured";
import Locations from "./components/locations";
import Footer from "./components/footer";

function App() {
  return (
    <main className="App">
      <Header></Header>
      <Mission></Mission>
      <Featured></Featured>
      <Locations></Locations>
      <Footer></Footer>
    </main>
  );
}

export default App;
