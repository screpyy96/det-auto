import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import { ValorificaComponent } from './valorifica-component'

const Valorificare = () => {
    const [isShown, setIsShown] = useState(true)
    const [isShown1, setIsShown1] = useState(false)
    const [isShown2, setIsShown2] = useState(false)
    const [isShown3, setIsShown3] = useState(false)
    const [isShown4, setIsShown4] = useState(false)

    const handleClickEvent1 = () => {
        setIsShown(!isShown)
    }
    const handleClickEvent2 = () => {
      setIsShown(!isShown)
      setIsShown1(!isShown1)
    }
    
    
    const handleClickEvent3 = () => {
      setIsShown1(!isShown1)
        setIsShown2(!isShown2)
    }
    const handleClickEvent4 = () => {
      setIsShown2(!isShown2)
        setIsShown3(!isShown3)

    }
    const handleClickEvent5 = () => {
      setIsShown3(isShown3)
        setIsShown4(!isShown4)
    }

  return (
    <div style={{display: "inline-flex"}}>
        <div>
            <Button variant='contained' color='primary' onClick={handleClickEvent1}>Level 1</Button>
            {isShown && (
            // <ValorificaComponent />
            <h2>level1</h2>
            )}
        </div>
        <div>
            <Button variant='contained' color='primary' onClick={handleClickEvent2}>Level 2</Button>
            {isShown1 && (
            // <ValorificaComponent />
            <h2>level2</h2>
            )}
        </div>
        <div>
            <Button variant='contained' color='primary' onClick={handleClickEvent3}>Level 3</Button>
            {isShown2 && (
            // <ValorificaComponent />
            <h2>level3</h2>
            )}
        </div>
        <div>
            <Button variant='contained' color='primary' onClick={handleClickEvent4}>Level 4</Button>
            {isShown3 && (
            // <ValorificaComponent />
            <h2>level4</h2>
            )}
        </div>
        <div>
            <Button variant='contained' color='primary' onClick={handleClickEvent5}>Level 5</Button>
            {isShown4 && (
            // <ValorificaComponent />
            <h2>level5</h2>
            )}
        </div>

       
    </div>
  );
}
   
  


export default Valorificare