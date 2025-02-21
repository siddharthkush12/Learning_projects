import { v2 as cloudinary } from "cloudinary";
import fs from "fs"; // file system already in nodejs

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    console.log("File is uploaded on cloudinary");
    console.log(response);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove the locally saved tempFile as upload operation failed
    return null;
  }
};

export {uploadOnCloudinary}
