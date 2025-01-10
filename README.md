# Filtered Image API

This project is a simple Node.js application that processes an image from a given URL by applying filters and returns the filtered image.

## Features

- Accepts an image URL as input and validates it.
- Processes the image using the `filterImageFromURL` function.
- Returns the processed image as a response.
- Automatically deletes temporary files after processing.

## Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)
- Elastic beanstalk CLI installed

## Getting Started

### Installation


### Project requirements

- An endpoint URL for a running elastic beanstalk deployment (EB_URL): project-1-dev.us-east-1.elasticbeanstalk.com 

- valid GET requests including:
 http://project-1-dev.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_tabby_and_white_kitten_n01.jpg


 http://project-1-dev.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0