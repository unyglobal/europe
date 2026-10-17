// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kalmykiya-republic","repository":"europe","path":"russia/kalmykiya-republic","depth":2,"parent":"russia","children":["elista"]});
export const childModules = Object.freeze({"elista":"./elista/elista.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
