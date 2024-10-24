import React, { useState } from "react";

import "./Calculator.css";

const Calculator = () => {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [lastResult, setLastResult] = useState(0);
    const [lastOperation, setLastOperation] = useState("");
    const [lastNumber, setLastNumber] = useState("");
    const [isEvaluated, setIsEvaluated] = useState(false);

    const keys = [
        { label: "AC", value: "clear", type: "action" },
        { label: "( )", value: "brackets", type: "action" },
        { label: "%", value: "%", type: "action" },
        { label: "÷", value: "/", type: "operator" },
        { label: "7", value: "7" },
        { label: "8", value: "8" },
        { label: "9", value: "9" },
        { label: "×", value: "*", type: "operator" },
        { label: "4", value: "4" },
        { label: "5", value: "5" },
        { label: "6", value: "6" },
        { label: "-", value: "-", type: "operator" },
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" },
        { label: "+", value: "+", type: "operator" },
        { label: "<", value: "backspace", type: "action" },
        { label: "0", value: "0" },
        { label: ".", value: "." },
        { label: "=", value: "=", type: "operator" },
    ];

    const handleKeyClick = (value) => {

        if (value === "clear") {
            setInput("");
            setOutput("");
            setLastResult(0);
            setLastOperation("");
            setLastNumber("");
            setIsEvaluated(false);
        } else if (value === "backspace") {
            setInput((prevInput) => prevInput.slice(0, -1));
        } else if (value === "=") {
            // Evaluation logic
            if (input) {
                if (!isEvaluated) {
                    const result = eval(prepareInput(input));
                    setOutput(result);
                    setLastResult(result);
                    setIsEvaluated(true);

                    const operatorMatch = input.match(/[+\-*/]/g);
                    if (operatorMatch) {
                        setLastOperation(operatorMatch[operatorMatch.length - 1]);
                    }

                    const numberMatch = input.match(/(\d+\.?\d*)$/);
                    if (numberMatch) {
                        setLastNumber(numberMatch[0]);
                    }

                    setInput("");
                } else {
                    if (lastOperation && lastNumber) {
                        const result = eval(`${lastResult}${lastOperation}${lastNumber}`);
                        setOutput(result);
                        setLastResult(result);
                    }
                }
            }
        } else {
            if (isEvaluated) {
                setInput(value);
                setIsEvaluated(false);
            } else {
                setInput((prevInput) => prevInput + value);
            }
        }
    };

    const prepareInput = (input) => {
        return input.replace("%", "/100");
    };

    return (
        <div className="app">
            <div className="calculator">
                <div className="display">
                    <div className="input">{input}</div>
                    <div className="output">{output}</div>
                </div>
                <div className="keys">
                    {keys.map((key) => (
                        <div
                            key={key.value}
                            className={`key ${key.type || ""}`}
                            onClick={() => handleKeyClick(key.value)}
                        >
                            <span>{key.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Calculator;