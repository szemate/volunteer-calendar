import SlotsCalendar from "./components/SlotsCalendar";
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
      <SlotsCalendar />
      <Footer />
    </div>
  );
}

export default App;
