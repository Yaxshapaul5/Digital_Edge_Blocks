import React from "react";
import "./Gallery.css"; // Import CSS for styling

// Import your images
import img1 from "./../assets/img1.jpeg";
import img2 from "./../assets/img2.jpeg";
import img3 from "./../assets/img3.jpeg";
import img4 from "./../assets/img4.jpeg";
import img5 from "./../assets/img5.jpeg";
import img6 from "./../assets/img6.jpeg";

const Gallery = () => {
  const images = [
    { src: img1, title: "Artistic View " },
    { src: img2, title: "Nature's Bliss" },
    { src: img3, title: "Urban Serenity" },
    { src: img4, title: "Golden Hour" },
    { src: img5, title: "Mountain Majesty" },
    { src: img6, title: "Sea Breeze" },
  ];

  return (
    <div className="gallery-section">
      <div className="bottom-cord">
        <p>Discover the artistry of our craftsmanship, one block at a time!</p>
      </div>
      <div className="gallery-container">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img
              src={image.src}
              alt={`Gallery ${index + 1}`}
              className="gallery-image"
            />
            <div className="gallery-card">
              <p>{image.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
