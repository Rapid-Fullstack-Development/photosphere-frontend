import React, { useEffect } from "react";
import axios from "axios";

export function App() {

    useEffect(() => {
        axios.get(`http://localhost:3000/assets`)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(`Error retrieving assets:`);
                console.log(error);
            });
    }, []);

    return (
        <h1>Hello computer!</h1>
    );
}