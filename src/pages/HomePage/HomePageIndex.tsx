import React, { useState, useEffect } from "react";
import HomePageDesktop from "../../components/HomePageDesktop";
import HomePageMobile from "../../components/HomePageMobile";

const HomePageIndex: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <div>{isMobile ? <HomePageMobile /> : <HomePageDesktop />}</div>;
};

export default HomePageIndex;