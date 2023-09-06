import React from "react";

const CountWinning = ({ xWinCount, oWinCount }) => {
  return (
    <>
      <section className="winningContainer">
        <section className="winningX">
          <div className="playerX">
            <h1 className="x-player">Player-X Win :</h1>
            <h1 className="x-count-value">{xWinCount}</h1>
          </div>
        </section>

        <section className="winningO">
          <div className="playerO">
            <h1 className="o-player">Player-O Win :</h1>
            <h1>{oWinCount}</h1>
          </div>
        </section>
      </section>
    </>
  );
};

export default CountWinning;
