import { useState } from "react";
import { Form } from "../../components/Form";
import { List } from "../../components/List";
import { TotalMoney } from "../../components/TotalMoney";
import { Header } from "../../components/Header";
import "./style.css";

export const Home = ({ setIsLoggedIn }) => {
  const [listTransactions, setListTransactions] = useState([]);

  const [sideBarActive, setSideBarActive] = useState(false);

  return (
    <div className="home">
      <Header
        setIsLoggedIn={setIsLoggedIn}
        setSideBarActive={setSideBarActive}
      />

      <div className="containerHome">
        <Form
          sideBarActive={sideBarActive}
          setSideBarActive={setSideBarActive}
          setListTransactions={setListTransactions}
        />
        <TotalMoney listTransactions={listTransactions} />
        <List
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
      </div>
    </div>
  );
};
