import React, {Component} from "react";
import Car from "./Car";
import './App.css';

class App extends Component {

    state = {
        cars: [
            {name: 'BMW X5', mileage: '25345 km', year: '2020'},
            {name: 'AUDI Q7', mileage: '21345 km', year: '2021'},
            {name: 'RANGE ROVER', mileage: '100345 km', year: '2017'}
        ],
        pageTitle: 'CARS'
    }

    changeColor(e) {
        let cars = document.querySelectorAll('.car');
        for (let car of cars) {
            car.classList.toggle('button_pressed');
        }
    }

    changeTitle(newTitle) {
        console.log(this);
        this.setState(
            {pageTitle: newTitle}
        );
    }

    setTitle(event) {
        const newTitle = event.target.value;
        console.log(typeof newTitle, newTitle);
        this.setState(
            {
                pageTitle: newTitle
            }
        );
    }

    render() {
        const cars = this.state.cars;

        return (
            <div className="App">
                <h1>{this.state.pageTitle}</h1>
                <input  onInput={this.setTitle.bind(this)} className="set-title" type="text"/>
                <Car name={cars[0].name}
                     mileage={cars[0].mileage}
                     year={cars[0].year}
                     onClickButton={this.changeTitle.bind(this, cars[0].name)}/>
                <Car name={cars[1].name}
                     mileage={cars[1].mileage
                     } year={cars[1].year}
                     onClickButton={this.changeTitle.bind(this, cars[1].name)}/>
                <Car name={cars[2].name}
                     mileage={cars[2].mileage}
                     year={cars[2].year}
                     onClickButton={this.changeTitle.bind(this, cars[2].name)}/>
                <button className={'change_color'} onClick={this.changeColor}>CHANGE COLOR</button>
            </div>
        )
    }
}

export default App;
