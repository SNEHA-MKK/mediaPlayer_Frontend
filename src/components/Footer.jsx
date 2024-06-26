import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className='row p-5 mt-md-5'>
      <div className="col-md-4 col-xs-12">
        <h4 className='mb-3'><FontAwesomeIcon icon={faVideo} className='text-warning me-3'/>Media Player</h4>
        <p style={{textAlign:'justify'}} className='mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, porro. Mollitia nisi voluptatum iusto reiciendis architecto unde, voluptatibus ad quo aspernatur earum iste alias commodi accusamus ea suscipit, harum illo!</p>
      </div>

      <div className="col-md-1 col-xs-12"></div>

      <div className="col-md-2 col-xs-12">
        <h4>Links</h4>
        <Link to={'/'}><p className='mt-3'>Landing Page</p></Link>
        <Link to={'/home'}><p>Home Page</p></Link>
        <Link to={'/watch-history'}><p>Watch History Page</p></Link>
      </div>

      <div className ="col-md-2 col-xs-12">
        <h4>Guides</h4>
        <p className='mt-3'>React</p>
        <p>React Bootstrap</p>
        <p>Bootswatch</p>
      </div>

      <div className="col-md-3 col-xs-12">
        <h4>Contacts</h4>
        <div className='d-flex mt-3'>
            <input type="text" placeholder='EMAIL ID' className='form-control' />
            <button className='btn btn-warning ms-3'>Subscribe</button>
        </div>
        <div className='d-flex justify-content-between mt-4'>
            <FontAwesomeIcon icon={faInstagram} size='2xl' />
            <FontAwesomeIcon icon={faFacebook} size='2xl' />
            <FontAwesomeIcon icon={faTwitter}  size='2xl'/>
            <FontAwesomeIcon icon={faLinkedin}  size='2xl'/>
        </div>
      </div>

    </div>
  )
}

export default Footer
