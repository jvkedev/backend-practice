import jwt, { SignOptions } from "jsonwebtoken";
import type {StringValue} from "ms"

if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined");
}

if (!process.env.JWT_EXPIRES_IN) {
  throw new Error("JWT_EXPIRES_IN is not defined");
}

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN as StringValue;

export const generateToken = (payload: object) => {
  const options: SignOptions = {
    expiresIn: JWT_EXPIRES_IN,
  };

  return jwt.sign(payload, JWT_SECRET, options)
};
