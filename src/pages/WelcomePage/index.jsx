import "./style.css";
import WelcomeImg from "../../assets/illustration.svg";
import NuKenzie  from "../../assets/NuKenzie.svg"

export const WelcomePage = ({ setIsLoggedIn }) => {
  return (
    <main className="welcome__main">
      <section className="welcome__content">
        <img src={NuKenzie} alt="NuKenzie Logo" />
        <h4>Centralize o controle das suas finanças</h4>
        <p>de forma rápida e segura</p>
        <button onClick={() => setIsLoggedIn(true)}>Iniciar</button>
      </section>
      
      <section className="welcome__img">
        <img src={WelcomeImg} alt="Welcome img page" />
      </section>
    </main>
  );
};
