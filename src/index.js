import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import NavComponent from './components/NavComponent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<div className="main">
		<NavComponent />
		<App />
	</div>
	, document.getElementById('root'));

registerServiceWorker();
