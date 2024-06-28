import React from 'react';
import ReactDOM from 'react-dom/client';
import { registerSW } from 'virtual:pwa-register';
import { MantineProvider, DEFAULT_THEME } from '@mantine/core';

import '@mantine/core/styles.css';

import './index.css';
import { App } from './App.tsx';

const updateServiceWorkers = registerSW({
  onNeedRefresh() {
    if (confirm('New Content Available. Reload?')) {
      updateServiceWorkers(true);
    }
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider theme={DEFAULT_THEME}>
      <App />
    </MantineProvider>
  </React.StrictMode>,
);
