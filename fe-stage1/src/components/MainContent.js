import React from 'react';
import { useState } from 'react';
import LinkCard from './LinkCard';
import { links } from "../links";
import { SlackIcon } from '../assets/svgs/slack-icon';
import { GithubIcon } from '../assets/svgs/github-icon';
import img from "../assets/Images/profile.jpg"
import CameraIcon  from '../assets/svgs/camera-icon';

const MainContent = () => {

  const [isHovered , setIsHovered] = useState(false)
  const [isFocused , setIsFocused] = useState(false)


  const linksection = links.map(link => {
    return (
    <LinkCard 
      key={link.id}
      id = {link.id}
      text = {link.text}
      url = {link.url}
    />
  )})

  const handleMouseEnter =() => {
    setIsHovered(true)
  }

  const handleMouseLeave =() => {
    setIsHovered(false)
  }

  const handleMouseEnterOnCam = () => {
    setIsFocused(true)
  }

  const style = {
    width: isFocused ? '95' : '88',
    height: isFocused ? '95' : '88',
  }

  const imgStyle = {
    zIndex: isHovered ?  '-1' : ''
  }
  

  return (
    <div className="container">
      <section className = "avi-section">
        <div className='image' onMouseOver={handleMouseEnter} onMouseLeave = {handleMouseLeave}  style = {style}>
          <img 
            id='profile-pic'
            src={img}
            style ={imgStyle}
            alt='profile-pic'
            width={88}
            height={88}
          />
          <CameraIcon 
            hovered = {isHovered}
          />
        </div>
        <p id='twitter'>Rakim Alpha</p>
        <p id='slack'>Alaede Increase-Chris</p>
      </section>
      <section>
        {linksection}
        <div className='social-div'>
          {SlackIcon}
          {GithubIcon}
        </div>
      </section>
    </div>
  )
}

export default MainContent