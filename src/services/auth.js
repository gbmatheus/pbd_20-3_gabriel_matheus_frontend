export const USUARIO_AUTH = "@Eniatus:usuarioAuth";

export const isAuthenticated = () => localStorage.getItem(USUARIO_AUTH) !== null;

export const getUsuarioAuth = () => {
  return JSON.parse(localStorage.getItem(USUARIO_AUTH));
}

export const login = usuario => {
  localStorage.setItem(USUARIO_AUTH, JSON.stringify(usuario));
}

export const logout = () => {
  localStorage.removeItem(USUARIO_AUTH);
  localStorage.clear();
}