import './App.css';
import NavBar from './components/navbar/NavBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, {Component} from 'react';
import Search from './components/search/Search';


class App extends Component {
  render(){
    return (
      <MuiThemeProvider>
        <div>
          <NavBar/>
          <Search/>
        </div>

      </MuiThemeProvider>
    )
  }
}

export default App;
