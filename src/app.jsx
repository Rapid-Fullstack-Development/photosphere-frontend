import React from "react";
import axios from "axios";

export class App extends React.Component {

    async componentDidMount() {
        const response = await axios.get(`http://localhost:3000/assets`);
        console.log(response.data);
    }

    render() {
        return (
            <h1>Hello computer!</h1>
        );
    }
}