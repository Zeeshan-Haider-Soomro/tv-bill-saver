import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Footer from "./components/Footer";

const App = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 2500); // 4 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isSplashVisible) {
    return (
      <div style={{ backgroundColor: "white" }} className="flex items-center justify-center h-screen">
        <img
          src="/images/logo[2].png"
          alt="TV Bill Saver LLC"
          className="w-[200px] h-auto logo-animation"
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
