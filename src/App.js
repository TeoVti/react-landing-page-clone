/** @jsxImportSource @emotion/react */
import { ClassNames, css, Global, jsx } from '@emotion/react';
import apple from './Images/apple.svg';
import google from './Images/google.png';
import hero from './Images/hero.png';
import hero2 from './Images/hero2.png';
import hero3 from './Images/hero3.png';
import lines from './Images/lines.svg';
import sun from './Images/sun.png';

const wrapperStyles = css`
  overflow-x: hidden;
`;

const section1Styles = css`
  color: black;
  background: white;
`;

const container = css`
  margin: 0 auto;
  position: relative;
  padding: 32px;
  max-width: 1440px;

  > h1 {
    font-size: 48px;
    line-height: 120%;
    font-weight: 900;
    margin-top: 0;
    margin-bottom: 0;
  }

  > div {
    > h2 {
      position: absolute;
      bottom: 754px;
      font-size: 34px;
      line-height: 140%;
      font-weight: 900;
      margin: 0;
    }
    > a.google {
      position: absolute;
      width: 180px;
      border-bottom: none;
      right: 32px;
      bottom: 260px;
      bottom: auto;
      top: 610px;
    }
    > a.apple {
      position: absolute;
      width: 157px;
      border-bottom: none;
      right: 32px;
      bottom: 180px;
      padding: 12px;
      bottom: auto;
      top: 543px;
    }
    > div {
      position: relative;
      width: 1280px;
      margin: 0 auto;
      z-index: 100000;
    }
    > div > div {
      display: block;
      position: absolute;
      top: 430px;
      width: 320px;
      height: 320px;
      left: calc(50% - 160px);
      background: var(--background);
      > img.sun {
        width: 100%;
        height: auto;
        animation-fill-mode: forwards;
        animation-name: breathing;
        animation-duration: 19s;
        animation-iteration-count: 4;
        animation-timing-function: ease-in-out;
      }
      > img.lines {
        z-index: 1000;
        position: absolute;
        left: 0;
        bottom: 4px;
        width: 100%;
      }
    }

    > div {
      > img {
        width: 100%;
      }
      > span {
        display: block;
        margin: 8px 0 24px 0;
      }
    }
  }
`;

const section2Styles = css`
  background: black;
  margin-top: -732px;
  padding: 585px 0 0 0;
  color: #fff;
  display: block;
`;

const pStyles = css`
  margin-bottom: 24px;
  max-width: 66%;
  font-size: 125%;
`;

const img3Styles = css`
  width: 1280px;
  display: block;
  height: auto;
  margin: 0 auto;
`;

const section3Styles = css`
  background: white;
  color: black;
  margin-top: -850px;
  padding: 728px 0 0 0;
  display: block;
  > div > h2 {
    font-size: 34px;
    line-height: 140%;
    font-weight: 900;
    margin: 0;
  }
  > div > span {
    font-size: 125%;
    margin: 8px 0 24px 0;
    display: block;
  }
  > div > p {
    margin-bottom: 72px;
    max-width: 66%;
    font-size: 125%;
  }
  > div > img {
    width: 100%;
    display: block;
    margin: 0 auto;
    width: 1280px;
  }
`;

const section4Styles = css`
  background: black;
  color: white;
  margin-top: -528px;
  padding: 440px 0 0 0;

  > div > p {
    margin-bottom: 24px;
    max-width: 66%;
    font-size: 20px;
  }
  > div > ul > li {
    font-size: 32px;
    line-height: 48px;
    margin-bottom: 16px;
  }
  > div > ul > li > a {
    border-bottom: 2px solid #feed07;
    color: white;
    text-decoration: none;
  }
  > div > div > a.applee {
    position: absolute;
    width: 157px;
    border-bottom: none;
    right: 32px;
    bottom: 180px;
    padding: 12px;
  }
  > div > div a.googlee {
    position: absolute;
    width: 180px;
    border-bottom: none;
    right: 32px;
    bottom: 260px;
  }
  > div > footer {
    margin-top: 72px;
    opacity: 0.5;
    font-size: 14px;
  }
  > div > footer > a {
    border-bottom: 2px solid #feed07;
    color: white;
    text-decoration: none;
  }
`;

function App() {
  return (
    <div css={wrapperStyles}>
      <section css={section1Styles}>
        <div css={container}>
          <h1>Calmaria</h1>
          <div>
            <h2>
              Focus / <br></br>Breathe / <br></br> Relax /
            </h2>
            <a href="#" className="google">
              <img
                src={google}
                alt="google play logo"
                style={{ width: '180px' }}
              ></img>
            </a>
            <a href="#" className="apple">
              <img
                src={apple}
                alt="apple store logo"
                style={{ width: '157px' }}
              ></img>
            </a>
            <div>
              <img src={hero} alt="hero image"></img>
              <div>
                <img src={sun} alt="sun image" className="sun"></img>
                <img src={lines} alt="lines image" className="lines"></img>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section css={section2Styles}>
        <div css={container}>
          <p css={pStyles}>
            Access to information has helped us evolve rapidly but not without
            side effects. Misinformation and the strong polarization of opinions
            are amplified by our confirmation bias tendencies. What to believe,
            who is right, who is wrong?
          </p>
          <p css={pStyles}>
            Questions with no answers inevitably create anxiety. The good news
            is that there is a simple way to reduce it, just breathe. It works!{' '}
          </p>
          <p
            style={{ marginBottom: '150px', maxWidth: '66%', fontSize: '125%' }}
          >
            There are several different breathing techniques and exercises that
            are designed to bring your body to a deep relaxation state. Holding
            your breath for a period of time allows your body to better
            oxygenate. One of the simplest techniques is the 4-7-8 method which
            is simply inhaling for 4 seconds, holding your breath for 7 seconds
            and exhaling for 8 seconds.{' '}
          </p>
          <img src={hero3} alt="3 phones" css={img3Styles}></img>
        </div>
      </section>
      <section css={section3Styles}>
        <div css={container}>
          <h2>Calmaria</h2>
          <span>[ feminine ] /kɑʊma’ɾia/</span>
          <p>
            In Portuguese means calmness, tranquility, calm. It’s often used by
            seamen and surfers to indicate that there are no waves in the ocean.
            That mood perfectly translates to what this app intends to do, bring
            peace of mind and tranquility to your busy day to day life. Just
            breathe and relax.
          </p>
          <img src={hero2} alt="2 phones"></img>
        </div>
      </section>
      <section css={section4Styles}>
        <div css={container}>
          <p>Available for</p>
          <ul style={{ listStyle: 'none', padding: '0' }}>
            <li>
              <a href="https://play.google.com/store/apps/details?id=com.abdz.breathing">
                Android
              </a>
            </li>
            <li>
              <a href="https://apps.apple.com/us/app/calmaria/id1523108871">
                iOS
              </a>
            </li>
            <li>
              <a href="https://calmaria.app/pwa/">PWA Progressive Web App</a>
            </li>
          </ul>
          <div>
            <a href="#" className="googlee">
              <img
                src={google}
                alt="google play logo"
                style={{ width: '100%' }}
              ></img>
            </a>
            <a href="#" className="applee">
              <img
                src={apple}
                alt="apple store logo"
                style={{ width: '100%' }}
              ></img>
            </a>
          </div>
          <footer>
            Proudly designed and developed by the folks over at{' '}
            <a href="https://abduzeedo.com">abdz.do</a>
          </footer>
        </div>
      </section>
    </div>
  );
}

export default App;
