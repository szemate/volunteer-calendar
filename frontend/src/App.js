import Header from "./components/Header";
import Footer from "./components/Footer";
import MonthlyCalendar from "./components/MonthlyCalendar";
import WeeklyCalendar from "./components/WeeklyCalendar";

function App() {
  return (
    <div className="flex flex-col items-center bg-gradient-to-t from-blue-gray-200 via-blue-gray-100 to-blue-gray-200 min-h-screen">
      <Header />
      <MonthlyCalendar />
      <WeeklyCalendar />
      <Footer />
    </div>
  );
}

export default App;
