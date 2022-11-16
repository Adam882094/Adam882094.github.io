async function main(text, hashType) {
  let hashResult; //Initailize result string
  console.log(hashType);
  switch (
    hashType //Select hash function to run based on hashType selected input
  ) {
    case "SHA1":
      hashResult = await SHA1HashStr(text);
      break;
    case "SHA256":
      hashResult = await SHA256HashStr(text);
      break;
    case "SHA384":
      hashResult = await SHA384hash(text);
      break;
    case "MD5":
      hashResult = await MD5(text);
      break;
    default:
      hashResult = "Error, invalid Algorithm Selection"; //Returns error message if hashType invalid
  }
  console.log(hashResult);
  document.getElementById("hashOutput").innerHTML = hashResult;
}
