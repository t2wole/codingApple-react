import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목1, 글제목변경1] = useState('남자 코트 추천');
  let [글제목2, 글제목변경2] = useState('여자 코트 추천');

  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>
      <div className='list'>
        <h3>{ 글제목1 }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3>{ 글제목2 }</h3>
        <p>2월 18일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
