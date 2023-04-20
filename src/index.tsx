import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from './pages/MainPage';
import { IntlProvider } from "react-intl";
import { LOCALES } from "./i18n/locales";
import { messages } from "./i18n/messages";
import { store } from './store/store';
import AuthPage from './pages/AuthPage';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const browserLocale = navigator.language;

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <IntlProvider 
        messages={messages[browserLocale]}
        locale={browserLocale}
        defaultLocale={LOCALES.RUSSIAN}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainPage/>} />
            <Route path='/auth' element={<AuthPage/>} />
          </Routes>
        </BrowserRouter>
      </IntlProvider>
    </Provider>
  </React.StrictMode>
);
