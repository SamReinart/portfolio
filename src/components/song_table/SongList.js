import React from 'react';
import SongCard from './SongCard';

function SongTable(props) {
	return (
		<table className={'song-list'}>
			<tbody>
				{
					props.titles.map((title, index) => {
						return (
							<tr key={title + index}>
								<td>
									<SongCard rank={index+1} title={title} artist={props.artists[index]} album={props.albums[index]} cover={props.covers[index]} />
								</td>
							</tr>
						);
					})
				}
			</tbody>
		</table>
	);
}

export default SongTable;
