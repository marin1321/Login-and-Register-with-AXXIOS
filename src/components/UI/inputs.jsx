import React from 'react'

export const Inputs = ({idI,types, place}) => {
  return (
    <input id={idI} type={types} placeholder={place}></input>
  )
}
