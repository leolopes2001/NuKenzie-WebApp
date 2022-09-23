import { WelcomePage } from "./pages/WelcomePage";
import { Home } from "./pages/Home";
import { useState } from "react";


export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {!isLoggedIn ? (
        <WelcomePage setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Home setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
};
