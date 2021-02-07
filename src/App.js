import logo from './logo.svg';
import './App.css';
import * as React from "react";
import HomeComponent from "./component/HomeComponent";

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<HomeComponent/>)
    }
}

export default App;
