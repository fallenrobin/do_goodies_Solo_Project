import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <p><h1 style={{color:'#FF69B4', backgroundColor:'white'}}>WAOW SO TECHNOLOGY</h1></p>
        <p><h1 style={{color:'#FF69B4', backgroundColor:'white'}}>OMG THANX HOOMANS</h1></p>
      </div>
    </div>
  );
}

export default AboutPage;
