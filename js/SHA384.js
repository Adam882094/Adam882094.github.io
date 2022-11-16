async function SHA384hash(string) {
    const encoder = new TextEncoder();
    const message = encoder.encode(string);
    const hash = await crypto.subtle.digest('SHA-384', message);
    const hashToArray = Array.from(new Uint8Array(hash));
    return hashStr = hashToArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}