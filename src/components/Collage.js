import "./Collage.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "./Image";

const Collage = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Request image objects from API and set image array on receipt
        const getImages = async () => {
            const { data } = await axios.get("https://api.unsplash.com/photos/random", {
                params: {
                    count: 30,
                    orientation: "landscape"
                },
                headers: {
                    Authorization: "Client-ID MJ6WAgZrTAAwQLC5-Bj4XY_336JFzp7EIsWrRAQzwag"
                }
            });
            setImages(data);
        };
        getImages();
    }, []);

    return (
        <>
            <h1 className="collage__title">Some <br /><span>Photo</span> <br /><span>Co.</span></h1>
            <div className="collage">
                {images.map(image => {
                    return <Image key={image.id} image={image} />
                }
                )}
            </div>
        </>
    );
}

export default Collage;