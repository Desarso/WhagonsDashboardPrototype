import { group } from 'console';
import { link } from 'fs';
import { type } from 'os';
import React, { useReducer, useEffect } from 'react'
import { useState } from 'react';
import Row from './Row';
type Props = {}
type Boards = {
    Item: string;
    priority: string;
    spot: string;
    newThingy: string;
}

let key = 0;

function Board({}: Props) {

const [widths, setWidths] = useState([
    600,
    100,
    200,
    200
])

const [board, setBoard] = useState([
    {Item: "Item1", Priority: "low", Spot: "none"},
    {Item: "Item2", Priority: "low", Spot: "none"},
    {Item: "Item3", Priority: "low", Spot: "none"}
])

 const [mainList, setMainList] = useState([]);

function addColumnToBoard(propertyName : string) {
    let newBoard : any = board;
    for(let i =0; i<newBoard.length; i++){
        newBoard[i][propertyName] = "ass";
    }
    setBoard(newBoard);
}



useEffect(() => {
    addColumnToBoard("Hell")
  },[]);

  useEffect(() => {
    let group: any = [];
    let width = "200px;"
    console.log(Object.keys(board[0]).length);
    if(Object.keys(board[0]).length!= widths.length){
        let newWidths = widths;
        while(Object.keys(board[0]).length > newWidths.length){
            newWidths.push(200);
        }
        setWidths(newWidths);
       
    }
    let i = 0;
    for(let item in board[0]) {
        group.push(<li className = {`text-center text-sm border border-black-500 pl-10 pr-10 m-0 `} style={{width: `${widths[i]}px`}} key={key++}>{item}</li>)
        i++;
    }
    setMainList(group);
  },[board]);



// let objectProps = Object.getOwnPropertyNames(board[0]);
// console.log(board);


  return (
    <div>
        <div>
            <ul className='flex flex-row'>
                {mainList}
            </ul>
        </div>
        {
            board.map((row) => (
                <Row
                    line = {row}
                    key ={key++}
                    widths = {widths}
                />
            ))
        }
            
      
    </div>
  )
}

export default Board

//each board has certain fields
//however each filed is a different data type
//so they are not just strings.
//each type of field can be it's own component
//board data can be encoded as a 2x2 symetrical array
//with objects in it. 
