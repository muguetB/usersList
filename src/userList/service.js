export const fetchUsersService = async (page: number) => {
  const response = await fetch(`https://reqres.in/api/users?per_page=5&page=${page}`)
  const json = await response.json()
  return await json.data
}
