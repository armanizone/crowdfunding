import Compressor from "compressorjs";

async function compress (file: File, options?: any) {
  return new Promise((resolve, reject) => {
    new Compressor(file, {
      ...options,
      success: (compressed) => {
        resolve(compressed);
      },
      error: (err) => {
        reject(err);
      },
    });
  });
}

export default compress

