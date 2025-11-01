async function generateECCKeys() {
  const keyPair = await crypto.subtle.generateKey(
    {
      name: "ECDSA",
      namedCurve: "P-256",
    },
    true,
    ["sign", "verify"]
  );

  const publicKey = await crypto.subtle.exportKey("spki", keyPair.publicKey);
  const privateKey = await crypto.subtle.exportKey("pkcs8", keyPair.privateKey);

  document.getElementById("publicKey").value = arrayBufferToBase64(publicKey);
  document.getElementById("privateKey").value = arrayBufferToBase64(privateKey);
}

function arrayBufferToBase64(buffer) {
  const binary = String.fromCharCode(...new Uint8Array(buffer));
  return btoa(binary);
}
