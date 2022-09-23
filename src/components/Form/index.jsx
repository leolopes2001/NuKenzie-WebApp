import { useEffect, useState,useRef } from "react";
import "./style.css";

export const Form = ({
  sideBarActive,
  setSideBarActive,
  setListTransactions,
}) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(1);
  const [type, setType] = useState("");

  const sideBarContainer = useRef();

  useEffect(() => {
    if (sideBarActive) {
      sideBarContainer.current.classList.add("sidebar__open");
    }
  }, [sideBarActive]);

  const sideBarClose = () => {
    sideBarContainer.current.classList.remove("sidebar__open");
    setSideBarActive(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setListTransactions((oldListTransactions) => [
      ...oldListTransactions,
      { description, value, type: type || "Entrada" },
    ]);

    setDescription("");
    setValue(1);
    setType("");

    sideBarClose()
  };

  return (
    <div ref={sideBarContainer} className="sidebar">
      <button className="sidebar__close" onClick={() => sideBarClose()}>
        X
      </button>
      <form onSubmit={handleSubmit}>
        <h1 className="sidebar__title">Criar Lançamento</h1>
        <div className="form__description">
          <label>Descrição</label>
          <input
            type="text"
            placeholder="Descrição aqui"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            required
          />
          <span>Ex: Compra de ropuas</span>
        </div>
        <div className="form__div-align">
          <div className="form__value">
            <label>Valor</label>
            <input
              type="number"
              onChange={(e) => setValue(e.target.value)}
              value={value}
              required
            />
          </div>
          <div className="form__value form__value--type">
            <label>Tiṕo de valor</label>
            <select onChange={(e) => setType(e.target.value)} value={type}>
              <option value="Entrada">Entrada</option>
              <option value="Saida">Despesa</option>
            </select>
          </div>
        </div>
        <button className="form__add-btn" type="submit">Inserir valor</button>
      </form>
    </div>
  );
};
