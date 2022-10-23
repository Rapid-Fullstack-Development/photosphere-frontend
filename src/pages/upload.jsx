import React from "react";

export class UploadPage extends React.Component {

    onUploadFiles(files) {
        console.log(files);
    };

    render() {
        return (
            <div>
                <p>Click the button and choose files to upload</p>
                <input
                    type="file"
                    multiple={true}
                    accept="image/*"
                    onChange={event => {
                        this.onUploadFiles(event.target.files);
                    }}
                    />
            </div>
        );
    }
}