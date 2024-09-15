
# Image Steganography Project

This project demonstrates image steganography using the **Least Significant Bit (LSB)** manipulation technique. The project is divided into two parts:

- **Backend**: A FastAPI server for encoding and decoding images.
- **Frontend**: A React-based client interface built with the Tailwind CSS framework.

## Features

- Encode hidden messages within images using LSB steganography.
- Decode hidden messages from the encoded images.
- Simple and clean interface to interact with the steganography features.

## Tech Stack

### Backend:
- **Python**: Main programming language.
- **FastAPI**: The backend framework for building APIs.
- **Uvicorn**: ASGI server to run the FastAPI application.
- **Pillow**: Python library for image processing.
- **Python-Multipart**: To handle file uploads.
- **Vercel**: Used for deploying the backend.

### Frontend:
- **React**: JavaScript framework for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Vercel**: Deployed the frontend alongside the backend.

## Unique Combination

Traditionally, FastAPI is not often paired with React, but in this project, both the backend and frontend are seamlessly integrated and deployed using **Vercel**, which provides a smooth development and deployment experience.

## How It Works

1. **Encoding**: The user uploads an image and enters a message. The LSB technique embeds the message into the least significant bits of the image pixels, producing a steganographic image.
2. **Decoding**: The user uploads the encoded image, and the application retrieves the hidden message from the image using the reverse LSB technique.

## Setup Instructions

### Backend

1. Clone the repository.
2. Install dependencies:
   ```bash
   pip install fastapi uvicorn pillow python-multipart
   ```
3. Run the server:
   ```bash
   uvicorn main:app --reload
   ```

### Frontend

1. Navigate to the frontend directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Deployment

Both the backend and frontend are deployed using Vercel. Check out the deployed project here:
- [Frontend URL](https://image-steganography-py.vercel.app/)
- [Backend URL](https://stegserver-ebmc9j0kk-a8h1kms-projects.vercel.app)

## Future Enhancements

- Add support for different steganography techniques.
- Improve UI/UX for better user interaction.
