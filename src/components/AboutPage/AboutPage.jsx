import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Footer from '../Footer/Footer';


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
import { AiFillGithub } from "react-icons/ai"; //github

const useStyles = makeStyles({
  icon: {
    margin: '3px',
    padding: '2px'
  }
});
// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {

  const classes = useStyles();

  return (
    <div>
      <div>
        <img
          style={{ width: '400px', objectFit: 'contain' }}
          src="images/meme.png"
          alt={"One does not simply donate without getting a tasty treat"} />

        <div style={{
          backdropFilter: 'blur(15px)', display: 'flex',
          alignItems: 'center', flexDirection: 'column'
        }} >
          <h2 style={{ color: 'white', textShadow: '1px 1px black' }}>
            Do Goodies was built with:</h2>

          <div style={{ textAlign: 'center' }}>
            <IoLogoJavascript size={50}
              className={classes.icon}
              style={{ backgroundColor: 'yellow' }} />

            <AiFillHtml5 size={50}
              className={classes.icon}
              style={{ color: 'orange', backgroundColor: 'white' }} />

            <FaReact size={50}
              className={classes.icon}
              style={{ color: '#61dbfb', backgroundColor: 'black' }} />

            <SiRedux size={50}
              className={classes.icon}
              style={{ color: '#5D3FD3', backgroundColor: 'black' }} />

            <SiReduxsaga size={50}
              className={classes.icon}
              style={{ color: '#98D640', backgroundColor: '#444444' }} />

            <SiPostgresql size={50}
              className={classes.icon}
              style={{ color: 'white', backgroundColor: '#008bb9' }} />

            <FaNpm size={50}
              className={classes.icon}
              style={{ color: 'white', backgroundColor: '#ae0000' }} />


            <SiExpress size={50}
              className={classes.icon}
              style={{ color: 'gray', backgroundColor: '#FCF5E5' }} />

            <IoLogoNodejs size={50}
              className={classes.icon}
              style={{ color: '#66ff00', backgroundColor: '#a9a9a9' }} />

            <SiMaterialui size={50}
              className={classes.icon}
              style={{ color: '#0096FF', backgroundColor: '#FAF9F6' }} />

            <GiWrappedSweet size={50}
              className={classes.icon}
              style={{ color: '#f6a192', backgroundColor: '#5F4B8BFF' }} />

            <AiFillGithub size={50}
              className={classes.icon}
              style={{ color: 'black', backgroundColor: 'white' }} />
          </div>

          <div style={{ color: 'white', textShadow: '1px 1px black' }}>
            <h2>Big thanks to:</h2>
            <h3>Prime Digital Academy and especially Dane and Matt, the Butler cohort,
              the Adams cohort, Ed Heyl for the Do Goodies logo, my bae John Massie, and the rest of my family
            </h3>
          </div>

        </div>
      </div>
      <Footer />
      <div style={{ height: '60px' }}></div>
    </div>
  );
}

export default AboutPage;
