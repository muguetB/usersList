// @flow

export type User = {
  id: number,
  first_name: string,
  last_name: string,
  avatar: string,
}

export type Action<T> = {
  type: string,
  payload: T,
}
