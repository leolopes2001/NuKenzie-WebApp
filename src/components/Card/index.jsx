import { FaTrashAlt } from "react-icons/fa";
import "./style.css";

export const Card = ({ item, idx, removeTransactions, className = "card" }) => {
  return (
    <li className={className}>
      <div className="descriptionBox">
        <p>{item.description}</p>
        <p>{item.type === "Saida" ? "Despesa" : "Entrada"}</p>
      </div>
      <div className="valueBox">
        <p>R$ {Number(item.value).toFixed(2)}</p>
      </div>
      <div className="removeBox">
        <button onClick={removeTransactions} id={idx}>
          <FaTrashAlt className="iconTrash" />
        </button>
      </div>
    </li>
  );
};
