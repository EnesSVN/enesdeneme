import React from 'react'

import { Button, ExampleComponent } from 'enesdeneme'
import 'enesdeneme/dist/index.css'

const App = () => {
  return (
    <>
      <ExampleComponent text='Merhaba' />
      <Button
        text='deneme'
        onClick={() => {
          alert('deneme')
        }}
      />
    </>
  )
}

export default App
