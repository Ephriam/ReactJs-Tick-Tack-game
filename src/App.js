import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {

  state = {
    name: ["hosea", "nahome", "mulu"],
    otherVar: 'otherVar',
    PS: ['X', 'O'],
    currentTurn: 1,
    board: [ '', '', '', '', '', '', '', '', '' ],
    winClass: 'win win-cont',
    gameOver: false
  }
  switchNameHandler = () => {
    this.setState({
      name: ["new_hosea", "nahome", "new_mulu"]
    })
  }

  dataBindingFromInput = (event) =>  {
    this.setState({
      name: [event.target.value, event.target.value, "new_mulu"]
    })
  }

  moveHandler = (i) => {
    if(this.state.board[i] !== '' || this.state.gameOver){return}
    this.state.currentTurn === 1 ?
    this.state.currentTurn = 2 : this.state.currentTurn = 1
    
    this.state.board[i] = this.state.PS[this.state.currentTurn - 1]
    this.setState({
      board: this.state.board
    })
    var a = this.state.board
    this.checkForWinner((a) => {
      if(a === false){return}
        this.setState({
          winClass: 'win'
        })
    })
}

checkForWinner = (cb) => {
  var winnigCombos = [[0, 1, 2], [0, 3, 6], [6, 7, 8], [8, 5, 2],
  [0, 4, 8], [6, 4, 2], [1, 4, 7], [3, 4, 5]]
  var a = this.state.board
  winnigCombos.map((v) => {
    if((a[v[0]] === a[v[1]])  && (a[v[1]] === a[v[2]]) && (a[v[1]] !== '')){
    this.setState({gameOver: true})
    cb(true)
    }
    })

    cb(false)
  }
  
  replay = () => {
    this.setState({
      currentTurn: 1,
      board: [ '', '', '', '', '', '', '', '', '' ],
      winClass: 'win win-cont',
      gameOver: false
    })    
  }
  render() {
    return (
     /* <div className="App">
          <h1>New React App </h1>
          <Person name={this.state.name[0]} handler={this.switchNameHandler}
          binding={this.dataBindingFromInput}/>
          <Person name={this.state.otherVar} binding={this.dataBindingFromInput}/>
          <Person name={this.state.name[1]}> text b/n tags </Person>
          <button onClick = {this.switchNameHandler}>Switch</button>
      </div>*/
      <div className="main"> 
        <button className='btn' onClick={() => {this.replay()}}>Replay</button>
        <div className="board">
            {this.state.board.map((v, i) => {
              return <div className="cell"
              onClick={() => {this.moveHandler(i)}}>{v}</div>
            })}
        </div>
        <div className={this.state.winClass}>{this.state.PS[
          this.state.currentTurn - 1
        ]} WON!!</div>
      </div>
    );
  }
}

export default App;
