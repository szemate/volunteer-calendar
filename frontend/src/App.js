import Calendar from "./components/Calendar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col items-center">
      <div>
        <Header />
        <Navbar />
      </div>
      <div>
        <Calendar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
