import React from 'react';

const Cards = (props) => {
	console.log('merpati');
	console.log(props.komentar);
	return (
	<div className="card">
			<div className="card-block">
				<p className="judul">{props.komentar}</p>
			</div>
		</div>
	);
}

export default Cards;