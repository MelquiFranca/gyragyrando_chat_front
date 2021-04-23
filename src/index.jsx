import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Rotas from './routes.js';
import { ApolloProvider } from '@apollo/client'
import client from './clienteApollo'

ReactDOM.render(
	<ApolloProvider client={client}>
		<Rotas />
	</ApolloProvider>,
  document.getElementById('root')
);