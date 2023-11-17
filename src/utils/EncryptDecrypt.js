import CryptoJS from "crypto-js";

const ivr = process.env.REACT_APP_IV;
const keyr = process.env.REACT_APP_KEY;

function asciiTOHexa(str) {
  let arr1 = [];
  for (let n = 0, l = str?.length; n < l; n++) {
    let hex = Number(str.charCodeAt(n)).toString(16);
    arr1.push(hex);
  }
  return arr1.join("");
}

const ivt = asciiTOHexa(ivr);
const keyt = asciiTOHexa(keyr);
const key = CryptoJS.enc.Hex.parse(keyt);
const iv = CryptoJS.enc.Hex.parse(ivt);

export const Encrypt = async (str) => {
  try {
    const encryptedRequest = await CryptoJS.AES.encrypt(
      JSON.stringify(str),
      key,
      {
        iv,
      }
    ).ciphertext.toString(CryptoJS.enc.Hex);

    return encryptedRequest;
  } catch (er) {
    return null;
  }
};

export const Decrypt = async (encryptedData) => {
  const response = await CryptoJS.AES.decrypt(encryptedData, key, {
    iv,
    format: CryptoJS.format.Hex,
  }).toString(CryptoJS.enc.Utf8);

  return response;
};
