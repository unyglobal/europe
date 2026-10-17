// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dunakeszi","repository":"europe","path":"hungary/pest-county/dunakeszi","depth":3,"parent":"hungary/pest-county","children":["alag","nadormajor","vizmutelep"]});
export const childModules = Object.freeze({"alag":"./alag/alag.js","nadormajor":"./nadormajor/nadormajor.js","vizmutelep":"./vizmutelep/vizmutelep.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
