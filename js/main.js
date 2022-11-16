async function main(text, hashType) {
  let hashResult; //Initailize result string
  console.log(hashType);

  // Clear the text if something is already there.
  if (document.getElementById("hashOutput").innerHTML != "") {
    document.getElementById("hashOutput").innerHTML = "";
  }
  // Show spinner for 2 seconds then remove and show text.
  loadSpinnerHandler("start");

  // Check if salt option is checked.
  if (document.getElementById("saltCheck").checked) {
    text = saltTextHandler(text);
  }

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

  // Replicate a async action
  setTimeout(() => {
    loadSpinnerHandler("stop");
    document.getElementById("hashOutput").innerHTML = hashResult;
  }, 3000);
}

// load the spinner
function loadSpinnerHandler(action) {
  if (action === "stop") {
    const loaders = document.querySelectorAll(".loadingStart");
    loaders.forEach((item) => {
      item.classList.replace("loadingStart", "loadingStop");
    });
  }

  if (action === "start") {
    const loaders = document.querySelectorAll(".loadingStop");
    loaders.forEach((item) => {
      item.classList.replace("loadingStop", "loadingStart");
    });
  }
}

// Custom Salt function
function saltTextHandler(text) {
  saltedText = generateSalt(15) + text + generateSalt(15);

  return saltedText;
}

// Helper function
function generateSalt(length) {
  // declare all characters
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = " ";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}
