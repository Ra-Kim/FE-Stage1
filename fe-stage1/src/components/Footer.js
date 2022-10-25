import React from 'react'
import { i4gIcon } from '../assets/svgs/i4g-icon'
import { zuriIcon } from '../assets/svgs/zuri-icon'

const Footer = () => {
  return (
    <footer>
      {zuriIcon}
      <p><small>HNG Internship 9 FrontEnd Task</small></p>
      {i4gIcon}
    </footer>
  )
}

export default Footer