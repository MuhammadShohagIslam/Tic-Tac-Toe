import React from "react";
import Square from "./Square";

type BoardProps = {
    squares: string[],
    handleClick: (i: number) => void
};

const Board = ({ handleClick, squares }: BoardProps) => {
    const readerSquare = (i:number) => {
        return <Square value={squares[i]} handleClick={() => handleClick(i)} />;
    };
    return (
        <>
            <div className="board-row">
                {readerSquare(0)}
                {readerSquare(1)}
                {readerSquare(2)}
            </div>
            <div className="board-row">
                {readerSquare(3)}
                {readerSquare(4)}
                {readerSquare(5)}
            </div>
            <div className="board-row">
                {readerSquare(6)}
                {readerSquare(7)}
                {readerSquare(8)}
            </div>
        </>
    );
};

export default Board;
