import React from 'react';

function SongCard(props) {
	return (
		<div className={'song-card zoom'}>
			<div className={'song-card-container'}>
				<div className={'song-card-rank'}>{ props.rank }</div>
				<section className={'song-card-details'}>
					<h2 className={'song-card-title'}>{ props.title }</h2>
					<h3>{ props.artist }</h3>
					<p>{ props.album }</p>
				</section>
				<img 
					className={'song-card-cover'} 
					src={props?.cover?.url} 
					alt={'Album cover artwork'} 
				/>
			</div>
		</div>
	);
}

export default SongCard;
