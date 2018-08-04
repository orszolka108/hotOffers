import React from 'react';
import ReactDOM from 'react-dom';
import {Base} from './components/base.jsx'

require ("../scss/main.scss");



document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <Base/>,
        document.getElementById('app')
    );
});