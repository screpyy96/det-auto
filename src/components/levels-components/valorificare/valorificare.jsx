import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import {ValorificaComponent} from './valorifica-component'
import {valorificare} from '../../../data/db'

const Valorificare = () => {
  const level1 = valorificare[0]
  const level2 = valorificare[1]


    const [isShown, setIsShown] = useState(true)
    const [isShown1, setIsShown1] = useState(false)
    const [isShown2, setIsShown2] = useState(false)
    const [isShown3, setIsShown3] = useState(false)
    const [isShown4, setIsShown4] = useState(false)

    const handleClickEvent1 = () => {
        setIsShown(!isShown)
        setIsShown1(!isShown1)
    }
    const handleClickEvent2 = () => {
        setIsShown(!isShown1)
        setIsShown1(!isShown2)
    }


  return (
    <div style={{display: "inline-flex"}}>
        <div>
            <Button variant='contained' color='primary' onClick={handleClickEvent1}>Level 1</Button>
            {isShown && (
            <ValorificaComponent level1={level1}/>
            
            )}
        </div>
        {/* <div>
            <Button variant='contained' color='primary' onClick={handleClickEvent2}>Level 2</Button>
            {isShown && (
            <ValorificaComponent level2={level2}/>
            
            )}
        </div> */}
       
       
    </div>
  );
}
   
  


export default Valorificare