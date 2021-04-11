import { Authentication } from "../../../domain/usecases/authentications";
import { InvalidParamError, MissingParamError } from "../../errors";
import { badRequest, serverError, unauthorized } from "../../helpers";
import { Controller, EmailValidator, HttpRequest, HttpResponse } from "../signup";

export class LoginController implements Controller {
  private readonly authetication: Authentication
  private readonly emailValidator: EmailValidator

  constructor (
    authetication: Authentication,
    emailValidator: EmailValidator
  ) {
    this.authetication = authetication
    this.emailValidator = emailValidator
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { email, password } = httpRequest.body
      const requiredFields = ['email', 'password']

      for (const field of requiredFields) {
        if (!httpRequest.body[field])
          return badRequest(new MissingParamError(field))
      }

      const isValid = this.emailValidator.isValid(email)

      if (!isValid)
        return badRequest(new InvalidParamError('email'))

      const accessToken = await this.authetication.auth(email, password)

      if (!accessToken) return unauthorized()
    } catch (err) {
      return serverError(err)
    }
  }
}
