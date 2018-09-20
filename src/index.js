import React from 'react';
import ReactDOM from 'react-dom';
import Main from './common/main';
import Header from './common/header';
import Footer from './common/footer';

ReactDOM.render(<Main/>, document.getElementById('main'));
ReactDOM.render(<Header/>, document.getElementById('header'));
ReactDOM.render(<Footer/>, document.getElementById('footer'));
