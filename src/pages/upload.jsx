import React from "react";
import axios from "axios";

const BASE_URL = process.env.BASE_URL;

export function UploadPage() {

    async function onUploadFiles(files) {
        for (const file of files) {
            await axios.post(`${BASE_URL}/asset`, file, {
                headers: {
                    "file-name": file.name,
                    "content-type": file.type,
                    "width": 255,
                    "height": 255,
                },
            });
        }
    };

    return (
        <div>
            <p>Click the button and choose files to upload</p>
            <input
                type="file"
                multiple={true}
                accept="image/*"
                onChange={async event => {
                    await onUploadFiles(event.target.files);
                }}
                />
        </div>
    );
}