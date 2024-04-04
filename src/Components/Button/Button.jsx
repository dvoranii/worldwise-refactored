import styles from "../Button/Button.module.css";
import { useNavigate, useLocation } from "react-router-dom";

// edge case
function login() {
  // will import functionality from util module
  console.log("Performing login...");
}

function ButtonComponent({ path, buttonText, className, onClick }) {
  let navigate = useNavigate();
  let location = useLocation();

  function defaultClickHandler(e) {
    e.preventDefault();
    if (path) {
      if (location.pathname === "login") {
        login();
      } else {
        // This approach allows us to maintain integrity of semantic html instead of using a <Link> element
        navigate(path);
      }
    }
  }
  const handleClick = onClick ? onClick : defaultClickHandler;

  const buttonClass = `${styles.button} ${className || ""}`;

  return (
    <button onClick={handleClick} className={buttonClass}>
      {buttonText}
    </button>
  );
}

export default ButtonComponent;
