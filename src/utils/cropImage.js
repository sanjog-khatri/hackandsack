import React, { useState } from 'react';
import './Cropper.css';

const CropImage = () => {
  const [imageSrc, setImageSrc] = useState(null);  // To store the uploaded image source
  const [croppedImage, setCroppedImage] = useState(null);  // To store the cropped image data URL
  const [isImageLoaded, setIsImageLoaded] = useState(false);  // To track if the image is loaded

  // Function to handle image cropping
  const getCroppedImg = (imageSrc, crop) => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = imageSrc;

      image.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        canvas.width = crop.width;
        canvas.height = crop.height;

        ctx.drawImage(
          image,
          crop.x, crop.y, crop.width, crop.height,
          0, 0, crop.width, crop.height
        );

        // Convert the canvas to a Blob and resolve with it
        canvas.toBlob((blob) => {
          const blobUrl = URL.createObjectURL(blob);  // Convert blob to URL
          resolve(blobUrl);  // Return the URL as the result
        }, 'image/jpeg');
      };

      image.onerror = (err) => reject(err);  // Reject if image loading fails
    });
  };

  // Handle file input change
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImageSrc(e.target.result);  // Set the uploaded image src
        setIsImageLoaded(true);  // Set image load state
      };

      reader.readAsDataURL(file);  // Read file as Data URL
    }
  };

  // Handle cropping
  const handleCropImage = () => {
    if (!imageSrc) return;

    // Define the crop area (x, y, width, height)
    const crop = { x: 50, y: 50, width: 150, height: 150 };

    getCroppedImg(imageSrc, crop)
      .then((blobUrl) => {
        setCroppedImage(blobUrl);  // Set the cropped image to state
      })
      .catch(console.error);  // Handle error if cropping fails
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Image Cropper</h1>

      {/* File input for uploading image */}
      <input type="file" accept="image/*" onChange={handleImageUpload} />

      {isImageLoaded && (
        <div>
          {/* Show uploaded image */}
          <img
            src={imageSrc}
            alt="Uploaded"
            style={{ width: '300px', marginTop: '20px' }}
          />
          
          {/* Button to trigger cropping */}
          <button onClick={handleCropImage} style={{ marginTop: '20px' }}>
            Crop Image
          </button>
        </div>
      )}

      {/* Display cropped image */}
      {croppedImage && (
        <div>
          <h2>Cropped Image</h2>
          <img
            src={croppedImage}
            alt="Cropped"
            style={{ width: '150px', marginTop: '20px' }}
          />
        </div>
      )}
    </div>
  );
};

export default CropImage;
