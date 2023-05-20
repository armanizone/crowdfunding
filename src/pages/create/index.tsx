import React from 'react'
import Accordion from './widgets/Accordion'
import Condition from './widgets/Condition'
import Welcome from './widgets/Welcome'

function Create() {
  return (
    <div>
      <Welcome/>
      <Condition/>
      <Accordion/>
    </div>
  )
}

export default Create