import React from 'react';

import { AiFillHtml5 } from "react-icons/ai"; //html
import { IoLogoJavascript } from "react-icons/io"; //js
import { FaReact } from 'react-icons/fa';//react
import { SiPostgresql } from "react-icons/si";//postgres
import { SiExpress } from "react-icons/si";//postgres
import { IoLogoNodejs } from "react-icons/io"; //node
import { SiMaterialui } from "react-icons/si";//mui
import { GiWrappedSweet } from "react-icons/gi";//swal
import { SiRedux } from "react-icons/si";//redux
import { SiReduxsaga } from "react-icons/si";//redux-saga
import { FaNpm } from 'react-icons/fa';//react



// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div >
      <div>
        <img
          style={{ width: '400px', objectFit: 'contain' }}
          src="images/meme.png"
          alt={"One does not simply donate without getting a tasty treat"} />

        <div style={{backdropFilter: 'blur(15px)'}} >
          <h3 style={{ color: 'white', textShadow: '1px 1px black'}}>
            Technologies used:</h3>
          <div>
            <IoLogoJavascript size={50} style={{ backgroundColor: 'yellow', margin: '3px' }} />
            <AiFillHtml5 size={50} style={{ color: 'orange', backgroundColor: 'white', margin: '3px' }} />
            <FaReact size={50} style={{ color: '#61dbfb', backgroundColor: 'black', margin: '3px' }} />
            <SiPostgresql size={50} style={{ color: 'white', backgroundColor: '#008bb9', margin: '3px' }} />
            <SiExpress size={50} style={{ color: 'gray', backgroundColor: 'white', margin: '3px' }} />
            <IoLogoNodejs size={50} style={{ color: 'green', backgroundColor: 'ivory', margin: '3px' }} />
            <SiMaterialui size={50} style={{ color: '#61dbfb', backgroundColor: 'gray', margin: '3px' }} />
            <GiWrappedSweet size={50} style={{ color: '#f6a192', backgroundColor: 'white', margin: '3px' }} />
            <SiRedux size={50} style={{ color: '#5D3FD3', backgroundColor: 'black', margin: '3px' }} />
            <SiReduxsaga size={50} style={{ color: 'gray', backgroundColor: '#C3B1E1', margin: '3px' }} />
            <FaNpm size={50} style={{ color: 'white', backgroundColor: '#ae0000', margin: '3px' }} />

          </div>
          <p><h3 style={{ color: '#FF69B4', backgroundColor: 'white' }}>
            OMG THANX HOOMANS</h3></p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
