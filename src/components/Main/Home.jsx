import React from 'react';
import './Home.css';
import { assets } from '../../assets/assets';

function Home() {
	return (
		<div className='main'>
			<div className='nav'>
				<p>Gemini</p>
				<img src={assets.user_icon} alt='' />
			</div>
			<div className='main-container'>
				<div className='greet'>
					<p>
						<span>Hello. Dev.</span>
					</p>
					<p>How can i help you today?</p>
				</div>
				<div className='cards'>
					<div className='card'>
						<p>Suggest a place to visit in Kosovo</p>
						<img src={assets.compass_icon} alt='' />
					</div>
					<div className='card'>
						<p>Explain how something works like an engineer</p>
						<img src={assets.bulb_icon} alt='' />
					</div>
					<div className='card'>
						<p>Brainstorm team bonding activities for our work retreat</p>
						<img src={assets.message_icon} alt='' />
					</div>
					<div className='card'>
						<p>Suggest a feature for my project</p>
						<img src={assets.code_icon} alt='' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
