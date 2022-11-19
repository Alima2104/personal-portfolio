import React, { useState, useEffect } from "react";
import "./header.css";
import Mobile from "./mobile";
import Web from "./web/index";


function Header() {
  const [isOpen, setIsOpen]=useState(false);

        // Sticky Menu Area
        useEffect(() => {
          window.addEventListener('scroll', isSticky);
          return () => {
              window.removeEventListener('scroll', isSticky);
          };
      });
      /* Method that will fix header after a specific scrollable */
             const isSticky = (e) => {
                  const header = document.querySelector('.header-section');
                  const scrollTop = window.scrollY;
                  scrollTop >= 100 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
              };
          return (
      <>
       <header className="header-section d-none d-xl-block">
       <div className="header">
      <div className="logo"> Alima Zhagufarova </div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <div onClick={()=>setIsOpen(!isOpen)}>
            <i class="fi-rr-apps menu-icon"></i>
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
       </header>
      </>
    );   



  // return (
  //   <div className="header">
  //     <div className="logo"> Alima Zhagufarova </div>
  //     <div className="menu">
  //       <div className="web-menu">
  //         <Web />
  //       </div>
  //       <div className="mobile-menu">
  //         <div onClick={()=>setIsOpen(!isOpen)}>
  //           <i class="fi-rr-apps menu-icon"></i>
  //         </div>
  //         {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default Header;