import React, {Component} from 'react';
import './Balance.scss';
import {connect} from "react-redux";
import {getBalance} from "../../store/actions/balanceAction";

class Balance extends Component {
    render() {
        return (
            <div className="Balance">
                <h3>Stan konta</h3>
                <div className="balance-container">
                <h2>Saldo</h2>
                    <h1>{this.props.balanceInfo.balance} zł</h1>
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