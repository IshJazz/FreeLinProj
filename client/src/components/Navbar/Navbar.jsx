import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";
import Gigs from "../../Pages/gigs/Gigs";
const Navbar = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: "John Doe",
    isSeller: true,
  };
  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
            <span className="text">FreeLin</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>FreeLin Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign In</span>
          {!currentUser?.isSeller && <span>Become A Seller</span>}
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src="" alt="" />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <Link to="/mygigs" className="link">
                        Gigs
                      </Link>
                      <Link to="/add" className="link">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link to="/orders" className="link">
                    Orders
                  </Link>
                  <Link to="/messages" className="link">
                    Messages
                  </Link>
                  <Link to="/" className="link">
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <span>Test</span>
            <span>Test2</span>
          </div>{" "}
        </>
      )}
    </div>
  );
};

export default Navbar;
