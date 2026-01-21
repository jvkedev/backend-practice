import crypto from "crypto";

export const generateResetToken = () => {
  const token = crypto.randomBytes(32).toString("hex");
  const hashedToken = crypto
    .createHash("sha256") // create a SHA-256 hash generator (one-way hashing)
    .update(token)  // hash this token
    .digest("hex"); // convert hash to string format

  return { token, hashedToken };
};
