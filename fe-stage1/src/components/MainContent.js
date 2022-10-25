import React from 'react';
import { defaultIcon } from "../assets/svgs/icon";
import LinkCard from './LinkCard';

const MainContent = () => {
  return (
    <div className="container">
      <section className = "avi-section">
        <div className='image'>
          {defaultIcon}
        </div>
        <p>Rakim Alpha</p>
      </section>
      <section>
        <LinkCard />
      </section>
    </div>
  )
}

export default MainContent