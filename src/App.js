import './App.css';
import splashImage from './embedded/background.jpg'
import TopBar from './components/TopBar';
import styled from 'styled-components';
import StoreListing from './components/StoreListing';

const Splash = styled.div`
  width: 100vw;
  height: 300px;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${splashImage});
  background-color: #deedd6;
  background-position: right;
  z-index: -1;
`

function App() {
  return (
    <>
    <TopBar/>
    <Splash/>
    <StoreListing/>
    </>
  );
}

export default App;
