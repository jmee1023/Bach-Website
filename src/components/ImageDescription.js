import React from 'react';
import './ImageDescription.css'; // Assuming you have a CSS file named "ImageDescription.css" for styling
import logo from "../resources/test.jpg"

const ImageDescription = ({ image, description }) => {
    return (
        <div className="image-container">
            <img className="image" src={image} alt="Image Description" style={{ width: '100%', height: '80%' }} />
            <p className="description">{description}</p>
        </div>
    );
};

export default ImageDescription;

