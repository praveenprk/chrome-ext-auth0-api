import React from 'react';
import { render } from 'react-dom';
import Onboard from './Onboard';

render(<Onboard/>, window.document.querySelector('#main-app'));

if (module.hot) module.hot.accept();
