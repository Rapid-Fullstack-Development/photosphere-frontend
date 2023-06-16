import React from "react";

export function UploadPage() {

    function onUploadFiles(files) {
        console.log(files);
    };

    return (
        <div>
            <p>Click the button and choose files to upload</p>
            <input
                type="file"
                multiple={true}
                accept="image/*"
                onChange={event => {
                    onUploadFiles(event.target.files);
                }}
                />
        </div>
    );
}