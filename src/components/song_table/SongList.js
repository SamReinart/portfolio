import React from 'react';
import SongCard from './SongCard';

function SongTable(props) {
	return (
		<section className={'song-list'}>
			{
				props.titles.map((title, index) => {
					return (
						<SongCard 
							rank={index+1} 
							title={title} 
							artist={props.artists[index]} 
							album={props.albums[index]} 
							cover={props.covers[index]} 
						/>
					);
				})
			}
		</section>
	);
}

export default SongTable;
