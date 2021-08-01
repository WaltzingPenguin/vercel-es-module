import crypto from "crypto"
import base32Encode from "base32-encode"

function generateID () {
  const id = crypto.randomBytes(8).buffer;
  return base32Encode(id, 'Crockford')
}

export default function (req, res) {
  res.json(generateID())
}
