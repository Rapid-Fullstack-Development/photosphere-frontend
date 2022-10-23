import React from "react";

export class UploadPage extends React.Component {

    render() {
        return (
            <div>
                <p>Click the button and choose files to upload</p>
                <input
                    type="file"
                    multiple={true}
                    accept="image/*"
                    onChange={event => {
                        console.log(event);
                    }}
                    />
            </div>
        );
    }
}