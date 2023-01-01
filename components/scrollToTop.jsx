import { useEffect, useState } from "react";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  
    useEffect(() => {
      const toggleVisibility = () => {
        if (window.pageYOffset > 200) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener("scroll", toggleVisibility);
  
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);
    return ( 
        <button
        onClick={scrollToTop}
        className={`btn fixed bottom-5 z-50 right-5 btn-base-200 rounded-full
        w-12 h-12 bg-black/50 border-0
        drop-shadow-xl p-4 text-primary ${!isVisible ? "opacity-0 scale-0" : "opacity-100 scale-100 backdrop-blur-lg"
          }`}
        style={{ transition: "ease-in-out all 0.3s" }}
      >
        <FontAwesomeIcon icon={faArrowUp} size="1x" color="white"/>
       
      </button>
     );
}
 
export default ScrollToTop;