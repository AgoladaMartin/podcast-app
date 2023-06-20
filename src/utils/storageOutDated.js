//Función que compara en milisegundos, si el local storage lleva más de un dia
export const storageOutDated = (timestamp) => {
  const oneday = 60 * 60 * 24 * 1000;
  const now = Date.now();
  return now - timestamp > oneday;
};
