export const convertToUrlWithScheme = (url) => {
  if (!url) return null;

  return /^(http:|https:)/.test(url) ? url : `https://${url}`;
};

export default convertToUrlWithScheme;
