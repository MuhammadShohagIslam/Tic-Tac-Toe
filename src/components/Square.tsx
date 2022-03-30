import React from "react";
type SquareProps = {
    value: string | number;
    handleClick: () => void;
};

const Square = ({ value, handleClick }: SquareProps) => {
    return (
        <>
            <button className="square" onClick={handleClick}>
                {value}
            </button>
        </>
    );
};

export default Square;
