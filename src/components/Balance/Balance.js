import React, {Component} from 'react';
import './Balance.scss';
import {connect} from "react-redux";
import CountUp from 'react-countup';
import {addCredits} from "../../store/actions/balanceAction";

class Balance extends Component {
    render() {
        return (
            <div className="Balance">
                <div className="balance-container">
                    <h2>Saldo</h2>
                    <p>
                        <CountUp end={this.props.balanceInfo.balance}
                                 decimal=","
                                 decimals={2}
                                 suffix=" zł"
                                 duration={1}
                        />
                    </p>
                    <button onClick={() => this.props.addCredits(100)}> dodaj</button>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    addCredits: (payload) => dispatch(addCredits(payload)),
});

const mapStateToProps = (state) => ({
    personalInfo: state.personalInfo,
    balanceInfo: state.balanceInfo
});

export default connect(mapStateToProps, mapDispatchToProps)(Balance);