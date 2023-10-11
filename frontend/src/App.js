import Calendar from "./components/Calendar";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col items-center bg-blue-gray-100 min-h-screen">
      <Header />
      <Calendar />
      <Footer />
    </div>
  );
}

export default App;
