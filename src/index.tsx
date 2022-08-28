// import * as ReactDOM from 'react-dom';

import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/layouts/layouts'
const container: any = document.getElementById('root');
const root = createRoot(container); 

root.render(<App />);