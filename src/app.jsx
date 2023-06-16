import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GalleryPage } from "./pages/gallery";
import { UploadPage } from "./pages/upload";

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route 
                    path="/" 
                    element={<GalleryPage />} 
                    />
                <Route 
                    path="/upload" 
                    element={<UploadPage />} 
                    />
           </Routes>
        </BrowserRouter>
    );
}