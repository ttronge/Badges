import React, { Component } from 'react';

import '../style/loader.css';

export default class Loader extends Component {
    render() {
        return (
            <div className="lds-grid">
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
            </div>
        );
    }
}