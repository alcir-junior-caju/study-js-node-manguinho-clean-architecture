import { MissingParamError } from "../../errors";
import { badRequest } from "../../helpers";
import { Controller, HttpRequest, HttpResponse } from "../signup";

export class LoginController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    return new Promise(resolve => resolve(badRequest(new MissingParamError('email'))))
  }
}
