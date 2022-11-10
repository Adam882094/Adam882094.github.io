async function main(text, hashType){
    let result;
    result = await SHA1HashStr(text);
    console.log(result);
    document.getElementById("hashOutput").innerHTML = result;
}