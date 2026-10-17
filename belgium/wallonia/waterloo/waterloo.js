// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"waterloo","repository":"europe","path":"belgium/wallonia/waterloo","depth":3,"parent":"belgium/wallonia","children":["champ-de-mai","pachy","petit-paris"]});
export const childModules = Object.freeze({"champ-de-mai":"./champ-de-mai/champ-de-mai.js","pachy":"./pachy/pachy.js","petit-paris":"./petit-paris/petit-paris.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
