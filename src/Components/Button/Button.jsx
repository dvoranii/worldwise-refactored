import styles from "../Button/Button.module.css";
import { useNavigate, useLocation } from "react-router-dom";

// edge case
function login() {
  // will import functionality from util module
  console.log("Performing login...");
}

function ButtonComponent({
  path,
  buttonText,
  className,
  onClick,
  isBackButton = false,
}) {
  let navigate = useNavigate();
  let location = useLocation();

  const handleBackNavigation = () => navigate(-1);
  const handlePathNavigation = () => {
    if (location.pathname === "login") {
      login();
    } else {
      navigate(path);
    }
  };

  const defaultClickHandler = (e) => {
    e.preventDefault();
    if (isBackButton) {
      handleBackNavigation();
    } else if (path) {
      handlePathNavigation();
    }
  };

  const handleClick = onClick ? onClick : defaultClickHandler;

  const buttonClass = `${styles.button} ${className || ""}`;

  return (
    <button onClick={handleClick} className={buttonClass}>
      {buttonText}
    </button>
  );
}

export default ButtonComponent;
