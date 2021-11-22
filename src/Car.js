import React from "react";

function Car(props) {
    return (
        <div className={"car"}>
            <p className={"car__name"}>{props.name}</p>
            <p className={"car__mileage"}>{props.mileage}</p>
            <p className={"car__year"}>{props.year}</p>
            <button onClick={props.onClickButton}>Click</button>
        </div>
    )
}

export default Car;