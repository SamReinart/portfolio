import React from 'react';
import Spinner from '../components/Spinner';
import clientID from '../clientid';

function buildAuthorizeURL() {
	const BASE_URL = 'https://accounts.spotify.com/authorize';
	const CLIENT_ID = `client_id=${clientID}`;
	const REDIRECT_URI = `redirect_uri=${encodeURIComponent('http://localhost:3000/topsongs')}`;
	const RESPONSE_TYPE = 'response_type=token';
	const SCOPE = encodeURIComponent('scope=user-top-read');
	return `${BASE_URL}?${CLIENT_ID}&${REDIRECT_URI}&${RESPONSE_TYPE}&${SCOPE}`;
}

function loginClickHandler() {
	window.location.href = buildAuthorizeURL();
}

function Home() {
	return (
		<div>
			This is the Home page...
			<button onClick={loginClickHandler}>
				Log in with Spotify
			</button>
			<br/>
			<Spinner />
		</div>
	)
}

export default Home;
