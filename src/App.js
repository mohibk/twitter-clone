import './App.css';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';
import Hidden from '@material-ui/core/Hidden';

function App() {
  return (
    <div className="app">
      <Hidden xsDown>
        <Sidebar />
      </Hidden>
      <Feed />
      <Hidden smDown>
        <Widgets />
      </Hidden>
    </div>
  );
}

export default App;
