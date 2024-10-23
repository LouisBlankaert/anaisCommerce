import Navbar from "./components/Navbar";
import Fond from "./components/Fond";
import Card from "./components/Card/Card";
import Card2 from "./components/Card/Card2";
import About from "./components/About";
import Reservation from "./components/Reservation";
import Hours from "./components/Hours";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <div className="bg-rose-500 min-h-screen relative">
        <Fond />
        <Navbar />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center bg-rose">
        <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-x-0 sm:gap-x-48">
          <Card />
          <div className="hidden sm:block border-l border-gray-400 h-[500px]"></div> {/* Cache la barre de séparation sur mobile */}
          <Card2 />
        </div>
      </div>

      <div className="pt-36 md:pt-60 bg-rose">
        <About />
      </div>

      <div className="pt-60 bg-rose">
        <Reservation />
      </div>
      
      <div className="pt-36 pb-28 bg-rose">
        <Hours />
      </div>

      <div className="bg-rose">
        <Footer />
      </div>
    </div>
  );
}
