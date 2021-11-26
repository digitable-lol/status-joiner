export interface Connector {
  put: (message: string) => unknown
  clear: (message: string) => unknown
}
