import React , {useState} from 'react'


const LinkCard = (props) => {
  const [isHover , setIsHover] = useState(false)

  function handleMouseEnter(){
    setIsHover(true)
  }

  function handleMouseLeave(){
    setIsHover(false)
  }

  return (
    <a href={props.url} target='blank'> 
      <div className='link-card' id = {props.id} onMouseEnter = {handleMouseEnter} onMouseLeave = {handleMouseLeave}>
          <p>{props.text}</p>
          {isHover && <div style={{display: "flex", width: "80%", justifyContent: "center", fontSize :"10"}}><p><small>{props.subtext}</small></p></div>}
      </div>
    </a>
  )
}

export default LinkCard