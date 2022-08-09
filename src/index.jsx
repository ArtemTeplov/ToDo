import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

const initialTasks = [
  {
    description: 'Completed task',
  },
  {
    description: 'Editing task',
  },
  {
    description: 'Active task',
  },
];

ReactDOM.render(<App initialTasks={initialTasks} />, document.getElementById('root'));
