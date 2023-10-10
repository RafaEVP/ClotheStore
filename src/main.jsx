import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVhpXhwK6dm-qgaLuUeAHJ8wfgEcgTpXA",
  authDomain: "clothestore-1610c.firebaseapp.com",
  projectId: "clothestore-1610c",
  storageBucket: "clothestore-1610c.appspot.com",
  messagingSenderId: "1016572622882",
  appId: "1:1016572622882:web:fbfa67469e17edb2a0727b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <ChakraProvider>
    <App />
  </ChakraProvider>,
)