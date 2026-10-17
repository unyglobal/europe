// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"groot-ijsselmonde","repository":"europe","path":"netherlands/south-holland/groot-ijsselmonde","depth":3,"parent":"netherlands/south-holland","children":["hordijkerveld"]});
export const childModules = Object.freeze({"hordijkerveld":"./hordijkerveld/hordijkerveld.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
