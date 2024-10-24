import React, { useState, useEffect } from "react";

import "./Animation.css";

const Animation = () => {
    const fieldWidth = 700;
    const fieldHeight = 500;
    const diameter = 100;
    const maxLeft = fieldWidth - diameter;
    const maxTop = fieldHeight - diameter;
    const vx = 5;
    const vy = 5;
    const rotationStep = 30;

    const [running, setRunning] = useState(false);
    const [goRight, setGoRight] = useState(true);
    const [goDown, setGoDown] = useState(true);
    const [x, setX] = useState(parseFloat(localStorage.getItem("ballX")) || 0);
    const [y, setY] = useState(parseFloat(localStorage.getItem("ballY")) || 0);
    const [rotation, setRotation] = useState(parseFloat(localStorage.getItem("ballRotation")) || 0);
    const [selectedBallType, setSelectedBallType] = useState(localStorage.getItem("ballType") || "none");

    const images = {
        none: '',
        basketball: './images/basketball.png',
        football: './images/football.png',
        volleyball: './images/volleyball.png',
        human: './images/myself.jpg',
        cartoon: './images/cartoon.png',
        logo: './images/logo.png'
    };

    // Toggle RUN/PAUSE
    const runClick = () => {
        setRunning(!running);
    };

    // Update ball position
    const calculate = () => {
        let newX = x;
        let newY = y;
        let newRotation = rotation;
        let newGoRight = goRight;
        let newGoDown = goDown;

        if (newGoRight) {
            newX += vx;
            if (newX >= maxLeft) {
                newX = maxLeft;
                newGoRight = false;
                newRotation += rotationStep;
            }
        } else {
            newX -= vx;
            if (newX <= 0) {
                newX = 0;
                newGoRight = true;
                newRotation += rotationStep;
            }
        }

        if (newGoDown) {
            newY += vy;
            if (newY >= maxTop) {
                newY = maxTop;
                newGoDown = false;
                newRotation += rotationStep;
            }
        } else {
            newY -= vy;
            if (newY <= 0) {
                newY = 0;
                newGoDown = true;
                newRotation += rotationStep;
            }
        }
        
        setX(newX);
        setY(newY);
        setRotation(newRotation);
        setGoRight(newGoRight);
        setGoDown(newGoDown);
        localStorage.setItem("ballX", newX);
        localStorage.setItem("ballY", newY);
        localStorage.setItem("ballRotation", newRotation);
    };

    // Change ball image
    const changeBall = (type) => {
        setSelectedBallType(type);
        localStorage.setItem("ballType", type);
    };

    // Run the calculation and rendering
    useEffect(() => {
        const interval = setInterval(() => {
            if (running) calculate();
        }, 25); // Animation at 40 fps

        return () => clearInterval(interval);
    }, [running, x, y, rotation, goRight, goDown]);

    return (
        <div id="container">
            <div id="field">
                <div
                    id="ball"
                    style={{
                        left: `${x}px`,
                        top: `${y}px`,
                        transform: `rotate(${rotation}deg)`,
                        backgroundImage: selectedBallType === "none" ? "" : `url(${images[selectedBallType]})`,
                        backgroundColor: selectedBallType === "none" ? "blue" : "",
                        backgroundSize: "cover",
                    }}
                />
            </div>
            <div id="control">
                <button id="run" className={`btn ${running ? "btn-warning" : "btn-success"}`} onClick={runClick}>
                    <span className={`bi bi-${running ? "pause" : "play"}`}>
                        &nbsp;{running ? "PAUSE" : "RUN"}
                    </span>
                </button>
                {["none", "basketball", "football", "volleyball", "human", "cartoon", "logo"].map((type, index) => (
                    <button key={index} className="btn btn-primary" onClick={() => changeBall(type)}>
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Animation;
