import styles from "./Header.module.css";
// import { FaCode } from "react-icons/fa";
const Header = (props) => {
  return (
    <div className={styles.app__navbar}>
      <span className={styles.leethub}>
        <img src={"leethub.png"} alt="text" className={styles.logo} />
        &nbsp; LEETHUB
      </span>
    </div>
  );
};
export default Header;
