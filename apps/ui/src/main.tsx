import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { registerSW } from 'virtual:pwa-register';

import { App } from './App.tsx';
import { theme } from './theme.ts';
import './index.css';

const updateServiceWorkers = registerSW({
  onNeedRefresh() {
    if (confirm('New Content Available. Reload?')) {
      updateServiceWorkers(true);
    }
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>,
);
