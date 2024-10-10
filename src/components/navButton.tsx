import { useState, useEffect } from "react";
//import './NavButton.css;'
function NavButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOverlapping, setIsOverlapping] = useState(false);

  const toggleBurger = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      const burgerButton = document.querySelector(".burger-wrapper");
      const targetComponent = document.querySelector(".target-component");

      if (burgerButton && targetComponent) {
        const burgerRect = burgerButton.getBoundingClientRect();
        const targetRect = targetComponent.getBoundingClientRect();

        const isOverlapping = !(burgerRect.right < targetRect.left || burgerRect.left > targetRect.right || burgerRect.bottom < targetRect.top || burgerRect.top > targetRect.bottom);
        setIsOverlapping(isOverlapping);
      }
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    };
  }, []);
  return (
    <div className="burger-wrapper" onClick={toggleBurger}>
      <div className={'burger ${isOpen ? "open" : ""}'}>
        {[...Array(5)].map((_, i) => (
          <span key={i} className={isOverlapping ? "burger-span" : "burger-span"} />
        ))}
      </div>
    </div>
  );
}
