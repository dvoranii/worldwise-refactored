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

  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) {
      onClick(e);
    } else if (isBackButton) {
      navigate(-1);
    } else if (location.pathname === "/login") {
      login();
    } else if (path) {
      navigate(path);
    }
  };

  const buttonClass = `${styles.button} ${className || ""}`;

  return (
    <button onClick={handleClick} className={buttonClass}>
      {buttonText}
    </button>
  );
}

export default ButtonComponent;
