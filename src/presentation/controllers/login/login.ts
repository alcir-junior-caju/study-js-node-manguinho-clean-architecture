import { badRequest, ok, serverError, unauthorized } from "../../helpers";
import { Authentication, Controller, Validation, HttpRequest, HttpResponse } from "./";

export class LoginController implements Controller {
  private readonly authetication: Authentication
  private readonly validation: Validation

  constructor (
    authetication: Authentication,
    validation: Validation
  ) {
    this.authetication = authetication
    this.validation = validation
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)

      if (error) return badRequest(error)

      const { email, password } = httpRequest.body

      const accessToken = await this.authetication.auth(email, password)

      if (!accessToken) return unauthorized()

      return ok({ accessToken })
    } catch (err) {
      return serverError(err)
    }
  }
}
