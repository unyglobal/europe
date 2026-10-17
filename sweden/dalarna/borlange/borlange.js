// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"borlange","repository":"europe","path":"sweden/dalarna/borlange","depth":3,"parent":"sweden/dalarna","children":["mjalga"]});
export const childModules = Object.freeze({"mjalga":"./mjalga/mjalga.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
