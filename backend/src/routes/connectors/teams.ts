import type { Request, Response } from 'express'
import { Requests, Responses, Route, Routes } from '../types'
import { Teams } from './utils'

export const putTeamsStatus = (): Route<unknown> => ({
  enabled: true,
  path: Routes.putTeamsStatus,
  callback: async (request: Request, response: Response) => {
    // TODO: Add getting of token from authenticated user
    const connector = new Teams(request.body.token)
    // TODO: Add info to Swagger
    const status = await connector.putStatusMessage(request.body.message, request.body.expiration)
    response.send({
      ...Responses.OK,
      status,
    })
  },
  type: Requests.put,
})
