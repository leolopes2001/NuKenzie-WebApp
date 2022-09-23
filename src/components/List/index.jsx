import { useState } from "react";
import { NavList } from "../NavList";
import { NoCardContainer } from "../NoCardContainer";
import { Card } from "../Card";
import "./style.css";
export const List = ({ listTransactions, setListTransactions }) => {
  const [typeRender, setTypeRender] = useState("Todos");

  const removeTransactions = (e) => {
    const id = +e.target.id;
    setListTransactions((oldListTransactions) =>
      oldListTransactions.filter((_, i) => i !== id)
    );
  };

  return (
    <div className="list__div">
      <NavList setTypeRender={setTypeRender} />

      {!listTransactions.length && (
        <h3 className="list__title-no-card">
          Você ainda não possui nenhum lançamento
        </h3>
      )}

      <ul className="list__transactions">
        {listTransactions.length ? (
          listTransactions.map(
            (item, idx) =>
              (item.type === typeRender || typeRender === "Todos") &&
              (item.type === "Entrada" ? (
                <Card
                  item={item}
                  key={idx}
                  removeTransactions={removeTransactions}
                />
              ) : (
                <Card
                  className="card redCard"
                  item={item}
                  key={idx}
                  removeTransactions={removeTransactions}
                />
              ))
          )
        ) : (
          <NoCardContainer />
        )}
      </ul>
    </div>
  );
};
