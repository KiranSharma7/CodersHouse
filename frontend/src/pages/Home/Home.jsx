import styles from "./Home.module.css";
import { Link, useHistory } from "react-router-dom";
import Card from "../../components/Shared/Cards/Card";
import Button from "../../components/Shared/Button/Button";

const Home = () => {
  const signInLink = {
    color: "#0077FF",
    textDecoration: "none",
    fontWeight: "bold",
    marginLeft: "10px",
  };

  const history = useHistory();
  function startRegistration() {
    history.push("/register");
  }

  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to CoderHouse !!" icon="logo">
        <p className={styles.text}>
          We’re working hard to get Codershouse ready for everyone! While we
          wrap up the finishing youches, we’re adding people gradually to make
          sure nothing breaks :)
        </p>
        <div>
          <Button onClick={startRegistration} text="Get Your UserName" />
        </div>

        <div className={styles.signInWrapper}>
          <span className={styles.hasInvite}>Have a invite text ?</span>
          <Link styles={signInLink} to="/login">
            Sign In
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
