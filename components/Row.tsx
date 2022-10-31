import React, { useEffect, useState } from 'react'

type Props = {
    line: any,
    widths: number[]
}

let key = 1000;
    

function Row({line, widths}: Props) {

    const [row, setRow] = useState("")

  

    useEffect(() => {
        let params: any= [];
        let i =0;
        for(let item in line){
            params.push(<li key={key++} className = {`text-center text-sm border border-black-500 pl-10 pr-10 m-0`} style={{width: `${widths[i]}px`}}>{line[item]}</li>)
            i++;
        }
        setRow(params);

    }, [line])



  return (
    <div>
        <ul className='flex flex-row'>
            {row}
        </ul>    
    </div>
  )
}

export default Row