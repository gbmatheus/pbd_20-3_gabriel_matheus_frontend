export const path = (path) => {
  let from = path.split('/')
  from.pop()
  return from.join('/');
}