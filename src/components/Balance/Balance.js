import React, {Component} from 'react';
import './Balance.scss';

class Balance extends Component {
    render() {
        return (
            <div className="Balance">
                <h3>Stan konta</h3>
                <div className="balance-container">
                <h2>Saldo</h2>
                    <h1>21.000 zł</h1>
                </div>
            </div>
        );
    }
}

export default Balance;