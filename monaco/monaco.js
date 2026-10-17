// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"monaco","repository":"europe","path":"monaco","depth":1,"parent":"","children":["municipality-of-monaco"]});
export const childModules = Object.freeze({"municipality-of-monaco":"./municipality-of-monaco/municipality-of-monaco.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
