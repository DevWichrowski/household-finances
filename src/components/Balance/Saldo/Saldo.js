import React from 'react';
import './Saldo.scss';
import CountUp from 'react-countup';

function Saldo(props) {
	return (
		<div className="Saldo">
			<h2>Saldo</h2>
			<p className="saldo-count">
				<CountUp end={props.end} decimal="," decimals={2} suffix=" zł" duration={0.5} />
			</p>
		</div>
	);
}

export default Saldo;
