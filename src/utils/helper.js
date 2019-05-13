import objectPath from 'object-path'

export const get = (array, key, defaultValue) => {
  return objectPath.get(array, key, defaultValue)
}
