export const getToken = () => {
  return localStorage.getItem("token") || "";
};

export const setToken = (token: string) => {
  return localStorage.setItem("token", token);
};

export const getLanguage = () => {
  return localStorage.getItem("lang") || "PT";
};

export const changeLanguage = (lang: string) => {
  localStorage.setItem("lang", lang);
  location.reload();
};
