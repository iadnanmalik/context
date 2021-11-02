import React  from 'react';
import MovieList from './MovieList';
import styled from 'styled-components';
import {MovieProvider} from './MovieContext';
import Hoc from './hoc';
import Hover from './Hover';
import Form from './form';
import './App.css';

const Title = styled.li`
font-size: 1.5em;
text-align: center;
color: palevioletred;

`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
padding: 4em;
background: papayawhip;
`;
function Home() {
  console.log(MovieProvider)
  
  return (
    <div>
      
    
    </div>
  );
}

export default Home;
