import React from 'react';
import ReactDOM from 'react-dom';
import Main from './common/Main';
import Header from './common/Header';
import Footer from './common/Footer';

ReactDOM.render(<Main/>, document.getElementById('main'));
ReactDOM.render(<Header/>, document.getElementById('header'));
ReactDOM.render(<Footer/>, document.getElementById('footer'));
