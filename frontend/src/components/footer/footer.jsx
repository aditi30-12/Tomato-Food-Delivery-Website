import React from 'react'
import './footer.css'


const footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis illo corrupti, ipsam quibusdam eligendi blanditiis rem minus amet est quis, fugiat et aut labore adipisci optio esse quam, commodi harum?</p>
            <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            </div>
            
            </div>
            <div className="footer-content-center">

            </div>
            <div className="footer-content-right">

            </div>
            
        </div>


    </div>
  )
}

export default footer