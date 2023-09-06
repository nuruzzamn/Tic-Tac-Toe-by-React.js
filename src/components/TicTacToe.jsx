import React, { useState, useEffect } from "react";
import Board from "./Board";
import GameOver from "./GameOver";
import gameStateValue from "./GameState";
import Reset from "./Reset";
import CountWinning from "./CountWinning";

const TicTacToe = () => {
  const playerX = "X";
  const player0 = "O";

  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(playerX);
  const [stickerClass, setStickerClass] = useState();
  const [gameState, setGameState] = useState(gameStateValue.inProgress);

  const [xWinCount, setXwincount] = useState(0);
  const [oWinCount, setOwincount] = useState(0);

  const onTileHandle = (index) => {
    if (gameState !== gameStateValue.inProgress) {
      return;
    }

    if (tiles[index] !== null) {
      return;
    }

    const newTiles = [...tiles];
    newTiles[index] = playerTurn;
    setTiles(newTiles);

    if (playerTurn === playerX) {
      setPlayerTurn(player0);
    } else {
      setPlayerTurn(playerX);
    }
  };

  const winningCombinations = [
    //for row
    { combination: [0, 1, 2], stickerClass: "strike-row-1" },
    { combination: [3, 4, 5], stickerClass: "strike-row-2" },
    { combination: [6, 7, 8], stickerClass: "strike-row-3" },

    //for colum
    { combination: [0, 3, 6], stickerClass: "strike-column-1" },
    { combination: [1, 4, 7], stickerClass: "strike-column-2" },
    { combination: [2, 5, 8], stickerClass: "strike-column-3" },

    //for diagonal
    { combination: [0, 4, 8], stickerClass: "strike-diagonal-1" },
    { combination: [2, 4, 6], stickerClass: "strike-diagonal-2" },
  ];

  const winnerCheck = (tiles, setStickerClass, setGameState) => {
    for (const winningCombination of winningCombinations) {
      const { combination, stickerClass } = winningCombination;

      const tileValue1 = tiles[combination[0]];
      const tileValue2 = tiles[combination[1]];
      const tileValue3 = tiles[combination[2]];

      if (
        tileValue1 !== null &&
        (tileValue1 === tileValue2) & (tileValue1 === tileValue3)
      ) {
        setStickerClass(stickerClass);
        if (tileValue1 === player0) {
          setGameState(gameStateValue.player0win);

          setOwincount((count) => count + 1);
          console.log("oWinCount", oWinCount);
        } else {
          setGameState(gameStateValue.playerXwins);

          setXwincount((count) => count + 1);
          console.log("XWinCount", xWinCount);
        }
      } else {
        const CheckIsDrowOrNot = tiles.every((tile) => tile !== null);

        if (CheckIsDrowOrNot) {
          setGameState(gameStateValue.draw);
        }
      }
    }
  };

  useEffect(() => {
    winnerCheck(tiles, setStickerClass, setGameState);
  }, [tiles]);

  const handleReset = () => {
    const resetTiles = Array(9).fill(null);
    setGameState(gameStateValue.inProgress);
    setTiles(resetTiles);
    setPlayerTurn(playerX);
    setStickerClass(null);
  };
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <CountWinning xWinCount={xWinCount} oWinCount={oWinCount} />
      <section className="container">
        <Board
          tiles={tiles}
          onTileHandle={onTileHandle}
          playerTurn={playerTurn}
          stickerClass={stickerClass}
        />
      </section>

      <GameOver gameState={gameState} />

      {/* play again  */}
      <Reset gameState={gameState} handleReset={handleReset} />
    </div>
  );
};

export default TicTacToe;
