import * as React from 'react';
import { useEffect } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import { Link } from 'react-router-dom';


export default function Policy() {

   useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

    return (
        <>
            <Header></Header>
            <div className="container">
                <ol className="breadcrumb underline text-left">
                    <li><Link to="/">Home</Link></li>
                    <li>Policy</li>
                </ol>
            </div>
            <div className="faq base-padd privacy-padd">
                <h2>Privacy Policy</h2>
                <div className="container">
                    <div className="terms-detail text-left">
                        <ul className='arrow'>
                            <li>
                                <p> We employ industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure.</p>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </div>
            <div className="faq base-padd" style={{paddingBottom:"7rem "}} >
                <h2>Policy</h2>
                <div className="container">
                    <div className="terms-detail text-left">
                        <ul className='arrow'>
                            <li>
                                <p><a><b>Event Date Change Policy:</b></a> Change your event date at no extra charge if available. Choose another dress of equal or higher cost if the original dress is unavailable. No refunds for lower-cost dresses.Additional charges for fitting and dry cleaning would be applicable. </p>
                            </li>
                            <li>
                                <p><a><b>Date Change Intimation Policy:</b></a> Notify us at least 10 days prior to pickup to change the date without charge. Within 3 days, a 50% rental charge applies, and full rent is charged for new dates.</p>
                            </li>
                            <li>
                                <p> <a><b>Dress Damage Policy:</b></a> Handle dresses with care. We assess damage for free repairs. Customer pays repair costs if applicable. Unrepairable damage incurs a purchase fee, generally 5 times or more the rental amount.</p>
                            </li>
                            <li>
                                <p><a><b>Dress Loss Policy:</b></a> Customers pay for lost dresses, generally 5 times or more the rental amount.
</p>
                            </li>
                            <li>
                                <p> <a><b>Dress Condition and Stains Policy:</b></a> Dresses are dry cleaned but may have minor visible stains. Inspect carefully before renting and discuss visible stains with staff before payment.</p></li>
                            <li>
                                <p> <a><b>Return and Late Return Policy:</b></a> Return dresses on time. Late returns may have consequences. Delays or damage may affect providing the dress to the next customer. We offer alternative solutions or full refunds if unsatisfied.</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
            <Footer></Footer>

        </>
    )
}