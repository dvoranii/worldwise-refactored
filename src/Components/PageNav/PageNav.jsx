import styles from "./PageNav.module.css";
import { NavLink } from "react-router-dom";
import ButtonComponent from "../Button/Button";
import Logo from "../Logo/Logo";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logoWrapper}>
        <Logo></Logo>
      </div>

      <ul className={styles.pageList}>
        <li className={styles.listItem}>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li className={styles.listItem}>
          <ButtonComponent
            path="/login"
            buttonText="Login"
            className={styles.loginBtn}
          />
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
