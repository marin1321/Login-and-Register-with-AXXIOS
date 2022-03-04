import React from 'react'

export const TA = ({idI, types, place}) => {
  return (
    <textarea id={idI} type={types} placeholder={place}></textarea>
  )
}
