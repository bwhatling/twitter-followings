import NavBar from './common/components/NavBar/NavBar';
import MainFooter from './common/components/MainFooter/MainFooter';

import './MainContainer.sass'

function App() {
  return (
    <div className="main-container">
      <NavBar/>
      <MainFooter/>
    </div>
  );
}

export default App;
