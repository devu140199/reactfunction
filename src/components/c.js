import React from 'react'
import D from './D';
import H from './H';

export default function c({name},{np2}) {
  return (
    <>
    <h1>Hello C Components {name}</h1>
    <h2>{np2}</h2>
    <H />
    <D address = {name}/>
    
    </>
  )
}
