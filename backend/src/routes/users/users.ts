import type { Request, Response } from 'express'
import { database } from '../../tools/database'
import { Requests, Responses, Route, Routes } from '../types'

export const getUsers = (): Route<unknown> => ({
  enabled: true,
  path: Routes.getUsers,
  callback: async (_request: Request, response: Response): Promise<void> => {
    try {
      const databaseUsers = await database.repository.user.getAll()

      response.send({
        ...Responses.OK,
        data: databaseUsers,
      })
    } catch (error) {
      response.send({
        ...Responses.ERROR,
        ...error,
      })
    }
  },
  type: Requests.get,
})
