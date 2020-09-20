import React, { useState, useEffect } from 'react';
import Spinner from '../components/Spinner';
import TermSelector from '../components/TermSelector';
import SongList from '../components/song_table/SongList';

function getAccessToken() {
	const searchParams = new URLSearchParams(window.location.hash.slice(1));
	return searchParams.get('access_token');
}

function TopSongs() {
	const [titles, setTitles] = useState([]);
	const [artists, setArtists] = useState([]);
	const [albums, setAlbums] = useState([]);
	const [covers, setCovers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [term, setTerm] = useState('medium_term');

	useEffect(() => {
		let isMounted = true;
		setLoading(true);

		fetch('https://api.spotify.com/v1/me/top/tracks?limit=50&time_range='+term, {
			headers: {
				'Authorization': `Bearer ${getAccessToken()}`
			}
		}).then(res => {
			if (!isMounted) return;
			// need to redirect to home if no workies
			return res.json();
		}).then(tracks => {
			console.log(tracks);
			setTitles(tracks.items.map(track => { return track.name; }));
			setArtists(tracks.items.map(track => { 
				return track.artists.map(artist => { 
					return artist.name; 
				}).join(', ');
			}));
			setAlbums(tracks.items.map(track => { return track.album.name; }));
			setCovers(tracks.items.map(track => { return track.album.images[0] }));
			setTimeout(setLoading, 1000, false);
		}).catch(err => {
			console.log(err);
		});

		return () => {
			isMounted = false;
		};
	}, [term]);

	return (
		<div className={'Top-Songs'}>
			This is the TopSongs page...
			{ loading ? 
				<Spinner /> 
			:
				<React.Fragment>
					<TermSelector term={term} setTerm={setTerm} />
					<SongList titles={titles} artists={artists} albums={albums} covers={covers} />
				</React.Fragment>
			}
		</div>
	);
}

export default TopSongs;
