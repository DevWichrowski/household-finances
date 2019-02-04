import React, {Component} from 'react';
import './Balance.scss';
import {connect} from "react-redux";
import CountUp from 'react-countup';

class Balance extends Component {
    render() {
        return (
            <div className="Balance">
                <h3>Stan konta</h3>
                <div className="balance-container">
                    <h2>Saldo</h2>
                    <h1>
                        <CountUp end={this.props.balanceInfo.balance}
                                 decimal=","
                                 decimals={2}
                                 suffix=" zł"
                        />
                    </h1>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    personalInfo: state.personalInfo,
    balanceInfo: state.balanceInfo
});

export default connect(mapStateToProps)(Balance);