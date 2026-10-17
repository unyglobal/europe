// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"piatra-neamt","repository":"europe","path":"romania/neamt-county/piatra-neamt","depth":3,"parent":"romania/neamt-county","children":["doamna"]});
export const childModules = Object.freeze({"doamna":"./doamna/doamna.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
