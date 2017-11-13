import React from "react";
import ReactDOM from "react-dom";

const MyPets = (props) => {

    let comp = null;

    if (props.sq > 50) {
        return comp = (<DogComponent text='Dog.' />);
    } else {
        return comp = (<Aquarium numOfFishes='25' />);

    }

};

const DogComponent = (props) => {
    return (
        <h1>{props.text}</h1>
    );
};

const FishComponent = (props) => {
    return (
        <li >{props.text}</li>
    );
};

const Aquarium = (props) => {
    let arr = [];
    for (let i = 0; i < props.numOfFishes; i++) {
        let fish = (<FishComponent text='Fish' key={i}/>);
        arr.push(fish);
    }
    return arr;
};

ReactDOM.render(<MyPets sq='13' />, document.getElementById("app"));