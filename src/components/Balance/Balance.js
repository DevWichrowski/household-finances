import React, {Component} from 'react';
import './Balance.scss';
import {connect} from "react-redux";
import {addCredits, withdrawCredits} from "../../store/actions/balanceAction";
import {Button} from 'antd';
import Saldo from "./Saldo/Saldo";
import OperationsMenu from "./OperationsMenu/OperationsMenu";

class Balance extends Component {
    constructor(props){
        super(props);

        this.state = {
            operationMenuVisible: false,
        }
    }

    toggleOperationMenu = () => this.setState({operationMenuVisible: !this.state.operationMenuVisible});

    addBalance = () =>{
      this.toggleOperationMenu();
    };

    render() {
        return (
            <div className="Balance">
                <div className="balance-container">
                    <Saldo end={this.props.balanceInfo.balance}/>

                    {/*<button onClick={() => this.props.addCredits(100)}> dodaj</button>*/}
                    {/*<button onClick={() => this.props.withdrawCredits(100)}> odejmij</button>*/}
                    {/*<button disabled> Przelej na cel</button>*/}
                </div>
                {this.state.operationMenuVisible === true ? <OperationsMenu toggleOperationMenu={this.toggleOperationMenu}/> : null}
                <Button className="operations-button" type="primary" size={'large'} onClick={this.toggleOperationMenu}> Operacje </Button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    addCreditsToStore: (payload) => dispatch(addCredits(payload)),
    withdrawCreditsFromStore: (payload) => dispatch(withdrawCredits(payload)),
});

const mapStateToProps = (state) => ({
    personalInfo: state.personalInfo,
    balanceInfo: state.balanceInfo
});

export default connect(mapStateToProps, mapDispatchToProps)(Balance);