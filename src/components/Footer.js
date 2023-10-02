import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcon/>
            <LinkedInIcon/>
        </div>
        <p> &copy; 2023 There is supposed to be some copywrite stuff here, but don't take anything of my pics without my permission</p>
    </div>
  )
}

export default Footer;
