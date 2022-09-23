import { useRef } from "react";
import "./style.css";
export const NavList = ({ setTypeRender }) => {
  const btnAll = useRef();
  const btnOut = useRef();
  const btnEntry = useRef();

  const handleClickBtn = (e) => {
    setTypeRender(e.target.id);
    clearBtnSelected();
    e.target.classList.add("active");
  };

  const clearBtnSelected = () => {
    btnAll.current.classList.remove("active");
    btnOut.current.classList.remove("active");
    btnEntry.current.classList.remove("active");
  };

  return (
    <div className="nav__container">
      <h4>Resumo financeiro</h4>
      <nav>
        <button id="Todos" className="active" ref={btnAll} onClick={handleClickBtn}>
          Todos
        </button>
        <button id="Entrada" ref={btnOut} onClick={handleClickBtn}>
          Entradas
        </button>
        <button id="Saida" ref={btnEntry} onClick={handleClickBtn}>
          Despesas
        </button>
      </nav>
    </div>
  );
};
