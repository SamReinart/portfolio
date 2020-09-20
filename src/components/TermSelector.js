import React from 'react';
// may need a way to disable currently selected term
function TermSelector(props) {
	return (
		<div className={'term-selector-container'}>
			{props.term}
			<div 
				onClick={ () => props.setTerm('short_term') }
			>
				Short Term
			</div>
			<div
				onClick={ () => props.setTerm('medium_term') }
			>
				Medium Term
			</div>
			<div
				onClick={ () => props.setTerm('long_term') }
			>
				Long Term
			</div>
		</div>
	);
}

export default TermSelector;
