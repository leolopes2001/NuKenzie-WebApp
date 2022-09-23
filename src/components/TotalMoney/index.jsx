import "./style.css";

export const TotalMoney = ({ listTransactions }) => {
  return (
    <>
      {!!listTransactions.length && (
        <section className="totalMoney__section">
          <div className="totalMoney__text">
            <h4>Valor total:</h4>
            <p>O valor se refere ao saldo</p>
          </div>
          <div className="totalMoney__value">
            <p>
              R$
              {listTransactions
                .reduce((acc, current) => {
                  return current.type === "Entrada"
                    ? (acc += Number(current.value))
                    : (acc -= Number(current.value));
                }, 0)
                .toFixed(2)}
            </p>
          </div>
        </section>
      )}
    </>
  );
};
