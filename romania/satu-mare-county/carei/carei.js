// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"carei","repository":"europe","path":"romania/satu-mare-county/carei","depth":3,"parent":"romania/satu-mare-county","children":["clara"]});
export const childModules = Object.freeze({"clara":"./clara/clara.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
