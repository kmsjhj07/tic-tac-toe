import { useState } from "react";
import Square from "./square";

export default function Board() {
    const [isX, setIsX] = useState(true);
    const [values, setValues] = useState<string[]>(Array(9).fill(null));

    const handleClick = (index: number) => {
        setValues((current) => {
            // * 중복 클릭 방지
            if (current[index]) {
                return current;
            }

            // * O X 적용
            const newValues = [...current];  
            if (isX) {
                newValues[index] = 'X';
            } else {
                newValues[index] = 'O';
            }
            setIsX(!isX);

            // * 승자 확인
            const winner = calculateWinner(newValues);
            if (winner) {
                alert(`Winner: ${winner}`)
            }
            return newValues;
        });
    }

    const calculateWinner = (values: string[]) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (values[a] && values[a] === values[b] && values[a] === values[c]) {
                return values[a];
            } 
        }
        return null;
    }

    return (
        <>
            <div className="board-row">
                <Square value={values[0]} onClick={() => handleClick(0)} />  
                <Square value={values[1]} onClick={() => handleClick(1)} />  
                <Square value={values[2]} onClick={() => handleClick(2)} />  
            </div>
            <div className="board-row">
                <Square value={values[3]} onClick={() => handleClick(3)} />  
                <Square value={values[4]} onClick={() => handleClick(4)} />  
                <Square value={values[5]} onClick={() => handleClick(5)} />   
            </div>
            <div className="board-row">
                <Square value={values[6]} onClick={() => handleClick(6)} />  
                <Square value={values[7]} onClick={() => handleClick(7)} />  
                <Square value={values[8]} onClick={() => handleClick(8)} />    
            </div>
        </>
    )
}