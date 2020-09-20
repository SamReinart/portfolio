import React from 'react';

function SongCard(props) {
	return (
		<article className={'song-card'}>
			<header className={'song-card-header'}>
				<p>{ props.rank }</p>
				<h2>{ props.title }</h2>
				<p>{ props.album }</p>
			</header>
			<div className={'song-card-details'}>
				<a className="artist-avatar" href="#">
					<img 
						src={ props?.cover?.url } 
						alt={'Album cover artwork'}
					/>
				</a>
				<svg className="half-circle" viewBox="0 0 106 57">
					<path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
				</svg>

				<div className="artist-name">
					<div className="artist-name-prefix">Artist</div>
					{ props.artist }
				</div>
			</div>
			<div className="tags">
				<a href="#">Genre</a>
				<a href="#">Genre</a>
				<a href="#">Genre</a>
			</div>
		</article>
	);
}

export default SongCard;
