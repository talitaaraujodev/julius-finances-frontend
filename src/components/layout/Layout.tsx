import { useState, useEffect } from "react";
import { Header } from "../Header/Header";
import { Outlet } from "react-router-dom";

export function Layout() {
  const [showSide, setShowSide] = useState(true);

  useEffect(() => {
    if (window.innerWidth <= 1024) {
      setShowSide(false);
    }
  }, []);

  function showSideBar(value: boolean) {
    setShowSide(value);
  }
  return (
    <>
      {/* sidebar */}
      <div className="content-main">
        <Header />
        <div className="main">
          <Outlet />
        </div>
      </div>
    </>
  );
}
