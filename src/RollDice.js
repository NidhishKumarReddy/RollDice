import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
    static defaultProps = {
        sides: ["one", "two", "three", "four", "five", "six"]
    };

    constructor(props) {
        super(props);
        this.state = {
            die1: 'one',
            die2: 'two',
            rolling: false
        };
        this.randSides = this.randSides.bind(this);
    }

    randSides() {
        let ind1 = Math.floor(Math.random() * 6);
        let ind2 = Math.floor(Math.random() * 6);
        let face1 = this.props.sides[ind1];
        let face2 = this.props.sides[ind2];
        this.setState({
            die1: face1,
            die2: face2,
            rolling: true
        });

        setTimeout(() => {
            this.setState({ rolling: false });
        }, 1000);

    }

    render() {
        return (
            <div className="RollDice">
                <div className="RollDice-container">
                    <Die face={this.state.die1} rolling={this.state.rolling} />
                    <Die face={this.state.die2} rolling={this.state.rolling} />
                </div>
                <button onClick={this.randSides} disabled={this.state.rolling}>{this.state.rolling ? 'Rolling...' : 'Roll Dice!'}</button>
            </div>
        );
    }
}

export default RollDice;