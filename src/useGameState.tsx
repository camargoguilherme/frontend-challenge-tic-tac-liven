/**
 * Obs: O controle de estado principal da aplicação deve ser mantido neste hook
 */

import { useState } from "react";

type Player = 'X' | 'O'

const useGameState = () => {
  const [starterPlayer, setStarterPlayer] = useState<Player>('X')
  const [nextPlayer, setNextPlayer] = useState<Player>(starterPlayer);
  const [currentBoard, setCurrentBoard] = useState<Array<string>>(Array(9).fill(null));
  const [stepNumber, setStepNumber] = useState(0);

  const _netxtPlayer = (nextPlayer: string) => nextPlayer === 'X' ? 'O' : 'X';

  const computeMove = (nextPlayer: Player, squareId: any) => {
    const _currentBoard = [...currentBoard];
    _currentBoard[squareId] = nextPlayer;
    setCurrentBoard(_currentBoard);
    setNextPlayer(_netxtPlayer(nextPlayer));
    setStepNumber((currentStepNumber) => currentStepNumber + 1);
  }

  return {
    nextPlayer,
    stepNumber,
    currentBoard,
    computeMove
  }
}

export default useGameState;
