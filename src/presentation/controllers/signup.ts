import {HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'
import { Controller } from '../protocols/controllers'

export class SignUpController implements Controller{
  handle (httpRequest: HttpRequest) : HttpResponse {
    const requeredFields = ['name', 'email', 'password', 'passwordConfirmation'];
    for (const field of requeredFields) {
      if (!httpRequest.body[field]) {
        return badRequest( new MissingParamError(field) )
      }
    }
  }

  
}

