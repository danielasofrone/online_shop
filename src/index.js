import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import ProductList from '../src/components/ProductList/ProductList';
import reducer from './store/reducers';
import Layout from './components/Layout/Layout';
import 'sanitize.css';
import './assets/styles/global.css';

WebFont.load({
  google: {
    families: ['Jaldi:300,400,400i,600,700,700i&display=optional'],
  },
});

const store = createStore(reducer);

const appRoot = (
  <Provider store={store}>
    <Layout>
      <ProductList />
    </Layout>
  </Provider>
);

ReactDOM.render(appRoot, document.getElementById('root'));
