import { Validation } from "../../../presentation/controllers/signup"
import { EmailValidatorAdapter } from "../../../main/adapters/validators/email-validator-adapter"
import { EmailValidation, RequiredFieldValidation, ValidationComposite } from "../../../presentation/helpers"

export const makeLoginValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['email', 'password']) {
    validations.push(new RequiredFieldValidation(field))
  }
  validations.push(new EmailValidation('email', new EmailValidatorAdapter()))

  return new ValidationComposite(validations)
}
