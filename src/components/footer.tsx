import visaLogo from '../assets/payment/visa.png';
import mastercardLogo from '../assets/payment/mastercard.png';
import paypalLogo from '../assets/payment/paypal.png';
import valuLogo from '../assets/payment/valu.png';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaClipboard } from 'react-icons/fa';
import { FaClipboardCheck } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { useState } from 'react';

export const Footer = ()=>{
    const [emailCopied,setEmailCopied] = useState(false);
    const emailCopyHandler = ()=>{
        navigator.clipboard.writeText("maghhstore@maghhTech.com")
        setEmailCopied(true);
        setTimeout(()=>{
            setEmailCopied(false);
        },2000)
    }
    return <div className="footer bg-[url(assets/headerbg/guitarnecks.jpg)] bg-center bg-cover md:h-[430px]">
        <div className="flex flex-col justify-between h-full overlay section">
            <div className="grid gap-4 md:grid-cols-6 grid-cols-2 pb-2">
                <div className="col-span-2">
                    <h1 className="text-white text-4xl py-2">Maghh Store</h1>
                    <p className="text-gray-300">Find Your Voice. Find Your Instrument.</p>
                    <div className="accepted-payment py-4">
                        <h2 className="text-white text-2xl">Accepted Patment</h2>
                        <div className="payment-logos grid grid-cols-4 gap-4 items-center">
                            <img src={visaLogo} alt="visa payment logo" />
                            <img src={mastercardLogo} alt="mastercard payment logo" />
                            <img src={paypalLogo} alt="paypal payment logo" />
                            <img src={valuLogo} alt="valu payment logo" />
                        </div>
                    </div>
                </div>
                <div className="about-us-links">
                    <h2 className="text-white font-bold text-2xl">About Us</h2>
                    <ul className='ms-2'>
                        <li className='link'>About Maghh store</li>
                        <li className='link'>Branches</li>
                        <li className='link'>Careers</li>
                        <li className='link'>Contact</li>
                        <li className='link'>Privacy Policy</li>
                        <li className='link'>Terms and Conditions</li>
                    </ul>
                </div>
                <div className="services-links">
                    <h2 className="text-white font-bold text-2xl">Services</h2>
                    <ul className='ms-2'>
                        <li className='link'>Shop by category</li>
                        <li className='link'>Shop by brand</li>
                        <li className='link'>Track order</li>
                        <li className='link'>Return Policy</li>
                    </ul>
                </div>
                <div className="contact-links col-span-2">
                    <h2 className="text-white font-bold text-2xl pb-2">Contact</h2>
                    <div className="contact-details flex flex-col gap-2">
                        <ul className='ms-2 flex gap-2'>
                            <li className='link'><FaFacebook/></li>
                            <li className='link'><FaTwitter/></li>
                            <li className='link'><FaYoutube/></li>
                        </ul>
                        <div onClick={emailCopyHandler} className="email-address text-white flex gap-2 items-center justify-between bg-slate-700 rounded-md p-2 hover:bg-slate-600 cursor-pointer select-none">
                            <div className="email flex gap-2 items-center">
                                <FaEnvelope/>
                                <p>maghhstore@maghhTech.com</p>
                            </div>
                            <div className="copy-email">
                                {emailCopied? <FaClipboardCheck/> : <FaClipboard/>}
                            </div>
                        </div>
                        <div className="phone-num text-white flex gap-2 items-center bg-slate-700 rounded-md p-2 hover:bg-slate-600 cursor-pointer">
                            <FaPhone/> 
                            <p>[+20] 01234567890</p>
                        </div>
                        <div className="main-branch">
                            <h2 className='text-white font-bold text-lg'>Main Branch</h2>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101408.18926086715!2d-122.08126699999998!3d37.4133351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7495bec0189%3A0x7c17d44a466baf9b!2sMountain%20View%2C%20CA%2C%20USA!5e0!3m2!1sen!2seg!4v1712702289843!5m2!1sen!2seg" style={{border:0}}  loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom border-t border-t-white pt-3">
                <p className='text-white text-center'>All Rights reserved by MaghhTech &copy; 2024</p>
            </div>
        </div>
    </div>
}