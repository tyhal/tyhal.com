import React from 'react';
import ReactDOM from 'react-dom';
import Router from "./router.js";
import './gencss/style/main.css'

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
//
// library.add(faStroopwafel)

ReactDOM.render(<Router />, document.getElementById('root'));
