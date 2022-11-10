async function main(text, hashType){
    let hashResult; //Initailize result string
    console.log(hashType)
    switch (hashType) { //Select hash function to run based on hashType selected input
        case 'SHA1': hashResult = await SHA1HashStr(text); break;
        case 'SHA256': hashResult = "TODO: Implement SHA256"; break;
        default: hashResult = "Error, invalid Algorithm Selection" //Returns error message if hashType invalid
    }
    //console.log(result);
    document.getElementById("hashOutput").innerHTML = hashResult;
}