import { IUserGithub } from "../interfaces/user"

export const getUser = async (username: string) => {
  const url = `https://api.github.com/users/${username}`
  return fetch(url).then<IUserGithub>((r) => r.json())
}

export const getFollower = async (username: string) => {
  const url = `https://api.github.com/users/${username}/followers`
  return fetch(url).then<IUserGithub[]>((r) => r.json())
}
