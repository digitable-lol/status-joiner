import fetch from 'cross-fetch'

export class Teams {
  url: {
    status: {
      put: string
      putMessage: string
    }
  }

  constructor(private readonly token: string) {
    this.url = {
      status: {
        put: 'https://presence.teams.microsoft.com/v1/me/forceavailability/',
        putMessage: 'https://presence.teams.microsoft.com/v1/me/publishnote',
      },
    }
  }

  // TODO: Add frontend & documentation, can be realized via the next patch
  async putStatus() {
    return this.put(this.url.status.put, { availability: 'Available' })
  }

  async putStatusMessage(message = 'text', expiry = '2021-11-26T20:59:59.999Z') {
    return this.put(this.url.status.putMessage, { message, expiry })
  }

  async clearStatusMessage() {
    return this.put(this.url.status.putMessage, { message: '', expiry: '9999-12-30T21:00:00.000Z' })
  }

  async put(url: string, payload: unknown) {
    try {
      const fetchResponse = await fetch(url, {
        headers: {
          authorization: `${this.token}`,
          Referer: 'https://teams.microsoft.com/',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
        },
        body: JSON.stringify(payload),
        method: 'PUT',
        referrerPolicy: 'strict-origin-when-cross-origin',
        mode: 'cors',
        credentials: 'include',
      })

      const fetchData = await fetchResponse.json()

      return fetchData
    } catch (error) {
      return error
    }
  }
}
