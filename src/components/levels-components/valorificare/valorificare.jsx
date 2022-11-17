import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import { ValorificaComponent } from './valorifica-component'

const Valorificare = () => {
    const [isShown, setIsShown] = useState(false)

    const handleClickEvent = () => {
        setIsShown(current => !current)
    }
  return (
    <div>
        <div>
            <Button variant='contained' color='primary' onClick={handleClickEvent}>Level 1</Button>
            {isShown && (
            <ValorificaComponent />
                  )}
        </div>
    </div>
  );
}
   
  


export default Valorificare