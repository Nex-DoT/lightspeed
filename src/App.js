import './App.css';
import Menu from "./components/orgonism/Menu";
import PosSystem from "./components/molecules/PosSystem";
import ManageBusiness from "./components/molecules/ManageBusiness";
import Software from "./components/molecules/Software";
import Payments from './components/molecules/Payments';
import Collaboration from './components/molecules/Collaboration';
import OnlinePOSFeature from './components/molecules/OnlinePOSFeature ';
import Connect from './components/orgonism/Connect';
function App() {
  return (
    <div className="w-full min-h-svh bg-1 relative flex flex-col items-center">
        <Menu />
        <PosSystem/>
        <ManageBusiness/>
        <Software/>
        <Collaboration/>
        <Payments/>
        <OnlinePOSFeature/>
        <Connect/>
    </div>

  );
}

export default App;
