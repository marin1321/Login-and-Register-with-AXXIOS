import React from 'react'

export const Buttons = ({idI, text, event}) => {
  return (
    <button id={idI} onClick={event}>{text}</button>
  )
}
