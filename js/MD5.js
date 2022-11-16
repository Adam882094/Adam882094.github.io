async function MD5(string) {
  const hashedString = [];
  const generateHash = CryptoJS.MD5(string);

  generateHash["words"].map((word) => {
    hashedString.push(word.toString());
  });

  return hashedString.join("").replace("-", "");
}
