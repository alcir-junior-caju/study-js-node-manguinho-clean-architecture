import { Validation } from "../../../presentation/controllers/signup"
import { EmailValidatorAdapter } from "../../../main/adapters/validators/email-validator-adapter"
import { EmailValidation, CompareFieldsValidation, RequiredFieldValidation, ValidationComposite } from "../../../presentation/helpers"

export const makeSignUpValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
    validations.push(new RequiredFieldValidation(field))
  }
  validations.push(new CompareFieldsValidation('password', 'passwordConfirmation'))
  validations.push(new EmailValidation('email', new EmailValidatorAdapter()))

  return new ValidationComposite(validations)
}
