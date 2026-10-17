// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rogaland","repository":"europe","path":"norway/rogaland","depth":2,"parent":"norway","children":["haugesund","sandnes","sola","stavanger","time"]});
export const childModules = Object.freeze({"haugesund":"./haugesund/haugesund.js","sandnes":"./sandnes/sandnes.js","sola":"./sola/sola.js","stavanger":"./stavanger/stavanger.js","time":"./time/time.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
