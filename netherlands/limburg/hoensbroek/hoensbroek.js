// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hoensbroek","repository":"europe","path":"netherlands/limburg/hoensbroek","depth":3,"parent":"netherlands/limburg","children":["maria-gewanden","mariarade"]});
export const childModules = Object.freeze({"maria-gewanden":"./maria-gewanden/maria-gewanden.js","mariarade":"./mariarade/mariarade.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
