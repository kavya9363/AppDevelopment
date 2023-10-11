import '../../css/home-style.css'
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
        {/* Footer */}
        <section className='footer'>
          <div className="footer-content">
            <div className="footer-logo">
              <img src="https://res.cloudinary.com/dqpyrzzw7/image/upload/v1695536806/logo-removebg-preview_r4gcjf.png" alt="" className="f-logo" />
            </div>
            <div className="footer-icons">
           <a href="https://www.facebook.com/"> <FacebookIcon className='f-fb' /></a>
            <InstagramIcon className='f-ig'/>
            <TwitterIcon className='f-twitter'/>
            <LinkedInIcon className='f-in'/>
            <YouTubeIcon className='f-utube'/>
            </div>
          </div>
          <div className="links-terms">
            <p className='f-links'>@Admission Box, All rights reserved
            <Link to="/terms"><a className="privacy">Privacy & Policy</a></Link>
            <Link to='/home/faq'><a className='FAQ'>FAQ</a></Link></p>
            {/* <a className="tnc">Terms & Conditions</a></p>  */}
          </div>
        </section>
    </div>
  )
}

export default Footer