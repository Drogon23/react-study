import React from "react";
import LifeCycleSample from "./LifeCycleTutorial/LifeCycleSample";
import ErrorBoundary from "./LifeCycleTutorial/ErrorBoundary";



const App = () => {

    const getRandomColor = () => {
        return '#' + Math.floor(Math.random() * 16777215).toString(16)
    }

    const [color, setColor] = React.useState(['#000000'])
    const handleClick = () => {
        setColor(getRandomColor())
    }

    return (
        <div>
            <button onClick={handleClick}>랜덤 색상</button>
            <ErrorBoundary>
                <LifeCycleSample color={color}/>
            </ErrorBoundary>
        </div>
    )
};

export default App;

