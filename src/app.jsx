import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GalleryPage } from "./pages/gallery";

export class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route 
                        path="/" 
                        element={<GalleryPage />} 
                        />
                </Routes>
            </BrowserRouter>
        );
    }
}