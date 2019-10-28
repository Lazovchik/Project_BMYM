import React, {Component} from 'react';
import { Row } from 'reactstrap';
import './Footer.css';
//import pictures
import fb from '../../data/img/fb.png';
import google from '../../data/img/google.png';
import twitter from '../../data/img/twitter.png';
import insta from '../../data/img/insta.png';

class Footer extends Component{


    render(){
        return(

            <footer className='footer'>
                <div className='container pt-4'>
                    <Row className=' d-flex justify-content-center'>
                        <a  href='http://localhost:3000/'><img 
                            src={fb}
                            width='40'
                            height='40'
                            className=' align-center mx-2'
                            alt='Security'
                            
                            /></a>
                        <a  href='http://localhost:3000/'><img 
                            src={twitter}
                            width='40'
                            height='40'
                            className=' align-center mx-2'
                            alt='twitter'
                            /></a>  
                        <a  href='http://localhost:3000/'><img 
                            src={google}
                            width='40'
                            height='40'
                            className=' align-center mx-2'
                            alt='google'
                            /></a>  
                        <a  href='http://localhost:3000/'><img 
                            src={insta}
                            width='40'
                            height='40'
                            className=' align-center mx-2'
                            alt='insta'
                            /></a>  
                    </Row>
                    <Row className=' d-flex justify-content-center py-1'>
                        ©2005-2019 Watermelon 
                    </Row>
                    
                
                </div>
            </footer>
        );
    }
}
export default Footer;