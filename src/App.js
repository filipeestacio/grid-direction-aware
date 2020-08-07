import React from 'react';
import { Grid } from './components/Grid';

const content = [
  {
    src: '/images/01.jpg',
    caption: {
      title: '',
      text: `"We prefer to help ourselves. We make mistakes, but we're human."`,
    },
  },
  {
    src: '/images/02.jpg',
    caption: {
      title: '',
      text: `"Without freedom of choice there is no creativity."`,
    },
  },
  {
    src: '/images/03.jpg',
    caption: {
      title: '',
      text: `"To boldly go where no man has gone before."`,
    },
  },
  {
    src: '/images/04.jpg',
    caption: {
      title: '',
      text: `"The prejudices people feel about each other disappear when they get to know each other."`,
    },
  },
  {
    src: '/images/05.jpg',
    caption: {
      title: '',
      text: `"Sometimes a feeling is all we humans have to go on."`,
    },
  },
  {
    src: '/images/06.jpg',
    caption: {
      title: '',
      text: `"Love sometimes expresses itself in sacrifice."`,
    },
  },
  {
    src: '/images/07.jpg',
    caption: {
      title: '',
      text: `"There's another way to survive — mutual trust and help."`,
    },
  },
  {
    src: '/images/08.jpg',
    caption: {
      title: '',
      text: `"Genius doesn't work on an assembly line basis. You can't simply say, 'Today I will be brilliant.'"`,
    },
  },
];

function App() {
  return (
    <div className="App">
      <Grid content={content} />
    </div>
  );
}

export default App;
