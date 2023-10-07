import Calendar from "./components/Calendar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import VolunteerDropdown from "./components/VolunteerDropdown";

function App() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <Header />
        <Navbar />
      </div>
      <Calendar />
      <VolunteerDropdown  />
      <Footer />
    </div>
  );
}

export default App;
