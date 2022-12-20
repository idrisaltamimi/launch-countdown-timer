import React from 'react'

import { facebook, facebookHover, instagram, instagramHover, pinterest, pinterestHover } from '../assets'

export default function Footer() {
  return (
    <footer>
      <button className='social-btn'>
        <img className='social' src={facebook} alt='facebook' />
        <img className='social-hover' src={facebookHover} alt='facebook' />
      </button>
      <button className='social-btn'>
        <img className='social' src={pinterest} alt='pinterest' />
        <img className='social-hover' src={pinterestHover} alt='pinterest' />
      </button>
      <button className='social-btn'>
        <img className='social' src={instagram} alt='instagram' />
        <img className='social-hover' src={instagramHover} alt='instagram' />
      </button>
    </footer>
  )
}
