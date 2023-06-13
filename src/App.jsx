import Footer from "./components/footer/Footer";
import Jobs from "./components/jobs/Jobs";
import Navbar from "./components/navbar/Navbar";
import Search from "./components/search/Search";
import Values from "./components/values/Values";
import "./styles/index.css";

function App() {
  return (
    <div className="w-[95%] m-auto bg-white">
      <Navbar />
      <Search />
      <Jobs />
      <Values />
      <Footer />
    </div>
  );
}

export default App;
