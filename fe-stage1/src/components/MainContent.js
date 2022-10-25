import React from 'react';
import { defaultIcon } from "../assets/svgs/icon";
import LinkCard from './LinkCard';
import { links } from "../links";

const MainContent = () => {

  const linksection = links.map(link => {
    return (
    <LinkCard 
      key={link.id}
      id = {link.id}
      text = {link.text}
      url = {link.url}
    />
  )})

  return (
    <div className="container">
      <section className = "avi-section">
        <div className='image'>
          {defaultIcon}
        </div>
        <p>Rakim Alpha</p>
      </section>
      <section>
        {linksection}
        <div>
          
        </div>
      </section>
    </div>
  )
}

export default MainContent