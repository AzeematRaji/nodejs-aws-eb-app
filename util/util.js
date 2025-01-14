import axios from "axios";
import fs from "fs";
import Jimp from "jimp";



// filterImageFromURL
// helper function to download, filter, and save the filtered image locally

 export async function filterImageFromURL(inputURL) {
  return new Promise(async (resolve, reject) => {
    try {
      const photoBuffer = await axios.get(inputURL, { 
        responseType: "arraybuffer",
      });
      const photo = await Jimp.read(Buffer.from(photoBuffer?.data, "binary"));
      const outpath =
        "/tmp/filtered." + Math.floor(Math.random() * 2000) + ".jpg";
      await photo
        .resize(256, 256) // resize
        .quality(60) // set JPEG quality
        .greyscale() // set greyscale
        .write(outpath, (img) => {
          resolve(outpath);
        });
    } catch (error) {
      reject(error);
    }
  });
}

// deleteLocalFiles
// helper function to delete files on the local disk

 export async function deleteLocalFiles(files) {
  for (let file of files) {
    fs.unlinkSync(file);
  }
}