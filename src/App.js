import NavBar from "./common/components/NavBar/NavBar";
import MainFooter from "./common/components/MainFooter/MainFooter";
import NavBarButton from "./common/components/NavBar/NavBarButton/NavBarButton";

import "./MainContainer.sass";

function App() {
  return (
    <div className="main-container">
      <NavBar navigationButtons={<NavBarButton />} />
      <MainFooter />
    </div>
  );
}

export default App;
