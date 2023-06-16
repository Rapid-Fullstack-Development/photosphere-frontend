import React, { useEffect, useState } from "react";
import axios from "axios";
import { Gallery } from "./lib/gallery";

const BASE_URL = `http://localhost:3000`;

export function App() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/assets`)
            .then(response => {
                setItems(response.data.assets);
            })
            .catch(error => {
                console.log(`Error retrieving assets:`);
                console.log(error);
            });
    }, []);

    return (
        <Gallery 
            items={items}                
            baseUrl={BASE_URL}
            />
    );
}