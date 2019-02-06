import React, {Component} from 'react';
import './Balance.scss';
import {connect} from "react-redux";
import CountUp from 'react-countup';
import {addCredits, withdrawCredits} from "../../store/actions/balanceAction";
import { Button} from 'antd';

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
                    <button onClick={() => this.props.withdrawCredits(100)}> odejmij</button>
                    <button disabled> Przelej na cel</button>
                </div>
                <Button className="operations-button" type="primary" size={'large'}> Operacje </Button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    addCredits: (payload) => dispatch(addCredits(payload)),
    withdrawCredits: (payload) => dispatch(withdrawCredits(payload)),
});

const mapStateToProps = (state) => ({
    personalInfo: state.personalInfo,
    balanceInfo: state.balanceInfo
});

export default connect(mapStateToProps, mapDispatchToProps)(Balance);