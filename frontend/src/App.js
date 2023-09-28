import Calendar from "./components/Calendar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <Header />
        <Navbar />
      </div>
      <Calendar />
      <Footer />
    </div>
  );
}

export default App;
