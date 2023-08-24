import * as React from 'react';
import { useEffect } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import { Link } from 'react-router-dom';


export default function Termcondition() {

	useEffect(() => {
		window.scrollTo(0, 0);
	},[]);

	return (
		<>
			<Header></Header>
			<div className="container">
				<ol className="breadcrumb underline text-left">
					<li><Link to="/">Home</Link></li>
					<li>Term & Condition</li>
				</ol>
			</div>
			<div className="faq base-padd" style={{paddingBottom:"7rem "}}>
				<h2>Terms & Condition</h2>
				<div className="container">
					<div className="terms-detail text-left">
						<ul className='arrow'>
							<li>
								<p><a><b>Minimum Renting Duration:</b></a> <strong>3 days.</strong></p>
								<ul className='arrow'>
									<li><p><a><b>First Day -</b></a>Dress can be picked up anytime after <strong>2:00 pm </strong>.</p></li>
									<li><p><a><b>Second Day -</b></a>Highlight day when you'll look amazing and be the center of attraction.</p></li>
									<li><p><a><b>Third Day -</b></a>Dress must be returned before <strong>7:30 pm</strong> .</p></li>
								</ul>
							</li>

							<li>
								<p><a><b>Renting Packages:</b></a> We offer <strong>3-day</strong>, <strong>7-day</strong> and <strong>10-day</strong> packages with pickup and return on the first and last day respectively.</p>
							</li>
							<li>
								<p><a><b>Pickup and Return Timing:</b></a> For all rentals, pickup after <strong>2:00 pm</strong> and return before <strong>7:30 pm.</strong></p>
							</li>
							<li>
								<p><a><b>Delay in Return:</b></a> Please inform us in advance for any delays. No charge for delays of a few hours, but additional charges for non-return on the designated day.</p>
							</li>
							<li>
								<p><a><b>Non-Refundable Rent Amount:</b></a> Rent paid is non-refundable.</p></li>
							<li>
								<p><a><b>Deposit Amount:</b></a> A deposit is required to secure the dress. Deposit varies for each dress and is specified during rental. Deposit is returned within <strong>3 days</strong> of dress return.</p>
							</li>
							<li>
								<p>
									<a><b>Delay in Handover:</b></a>
								Trend on Rent denies liability for losses caused by <strong>handover delays</strong>  and defers all matters to the <strong>Pune court</strong>.
								</p>
							</li>
						</ul>
						
					</div>
					<em className='text-center' style={{fontSize:"16px",color:""}}>By renting a dress, you agree to abide by these terms and conditions.</em>
				</div>
			</div>
			<Footer></Footer>

		</>
	)
}