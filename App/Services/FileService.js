import storage from '@react-native-firebase/storage';
import uuid from 'uuid/v4';

async function uploadFile(filePath, dir) {
  try {
    const filename = `${uuid()}.jpeg`; // Generate unique name
    const uploadPath = `${dir}/${filename}`;
    await storage().ref(uploadPath).putFile(filePath, {cacheControl: 'no-store',});
    return uploadPath;
  } catch (e) {
    console.log('upload file error', e.message);
    return false;
  }
}

export const fileService = {
  uploadFile,
}
