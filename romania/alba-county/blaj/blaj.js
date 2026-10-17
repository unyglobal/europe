// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"blaj","repository":"europe","path":"romania/alba-county/blaj","depth":3,"parent":"romania/alba-county","children":["blaj-sat"]});
export const childModules = Object.freeze({"blaj-sat":"./blaj-sat/blaj-sat.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
