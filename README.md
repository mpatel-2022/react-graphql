# react-graphql
Learning how to use Apollo Client's GraphQL with React

- Learned how to to produce results from Youtube "React With GraphQL (Apollo Client) Crash Course" 
    - https://www.youtube.com/watch?v=gAbIQx26wSI
- Rick and Morty API Playground 
    - https://rickandmortyapi.com/graphql 

How to start on MacOS
- npx create-react-app react-graphql
- npm install @apollo/client graphql
- npm audit fix --force //optional

To run application 
- npm start or yarn start

Common Errors 
- If you receive an error that says that it refused to connect on local:3000, run this in terminal: 
export NODE_OPTIONS=--openssl-legacy-provider
-“React must be in scope when using jsx” Error, put the following at the top of the corresponding file:
import React  from 'react';

Extensions 
- ES7+ React/Redux/React-Native snippets