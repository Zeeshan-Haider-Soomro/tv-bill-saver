import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Footer from './Components/Footer';
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";

const App = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 3000); // 4 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isSplashVisible) {
    return (
      <div style={{ backgroundColor: "white" }} className="flex items-center justify-center h-screen">
        <img
          src="/images/FooterLogo.png"
          alt="TV Bill Saver LLC"
          className="w-[400px] h-auto logo-animation"
        />
      </div>
    );
  }

  return (
    <div>
      <ScrollToTop />
      <ScrollToTopButton />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
