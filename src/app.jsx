import React from "react";
import axios from "axios";
import { Gallery } from "./lib/gallery";

const BASE_URL = `http://localhost:3000`;

export class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
        };
    }

    async componentDidMount() {
        const response = await axios.get(`${BASE_URL}/assets`);
        this.setState({
            items: response.data.assets,
        });    
    }

    render() {
        return (
            <Gallery 
                items={this.state.items}                
                baseUrl={BASE_URL}
                />
        );
    }
}