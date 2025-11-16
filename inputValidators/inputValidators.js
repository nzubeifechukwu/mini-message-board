import { body } from "express-validator";

const alphaNumErr = "must contain only letters and/or numbers.";
const usernameLengthErr = "must be between 1 and 10 characters.";
const messageLengthErr = "must be between 5 and 200 characters.";

export const validateUser = [
  body("name")
    .trim()
    .isAlphanumeric()
    .withMessage(`Username ${alphaNumErr}`)
    .isLength({ min: 1, max: 10 })
    .withMessage(`Username ${usernameLengthErr}`),
  body("message")
    .trim()
    .isLength({ min: 5, max: 200 })
    .withMessage(`Message ${messageLengthErr}`),
];
