import React from 'react'

export const Button = ({id, content, event}) => {
  return (
    <button id={id} onClick={event}>{content}</button>
  )
}
