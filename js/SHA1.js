async function SHA1HashStr(str) { //JPF1106768 - 2022-11-10
    var strIntArr = new TextEncoder().encode(str); //encode as Uint8Array
    var buffer = await crypto.subtle.digest('SHA-1', strIntArr); //hash the string
    var hashArr = Array.from(new Uint8Array(buffer)); //convert buffer to byte array
    return hexStr = hashArr.map((b) => b.toString(16).padStart(2, '0')).join(''); //convert bytes to hex string
}