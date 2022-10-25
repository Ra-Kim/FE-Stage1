import React from 'react'

const LinkCard = (props) => {
  return (
    <a href={props.url}> 
      <div className='link-card' id = {props.id}>
          <p>{props.text}</p>
      </div>
    </a>
  )
}

export default LinkCard