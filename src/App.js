import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const list = [
  {
    title: 'Title 1',
    url: '#',
    author: 'author 1',
    num_comments: 3,
    points: 4,
    objectId: 0
  },
  {
    title: 'Title 2',
    url: '#',
    author: 'author 2',
    num_comments: 2,
    points: 5,
    objectId: 1
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        {
          list.map((item) =>
              <div key={item.objectId}> 
                <span>
                  <a href={item.url}> {item.title} </a>
                </span>
                <span> {item.author} </span>
                <span> {item.num_comments} </span>
                <span> {item.points} </span>
              </div>
          )
        }
      </div>
    );
  }
}

export default App;
