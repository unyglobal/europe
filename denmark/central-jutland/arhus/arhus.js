// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"arhus","repository":"europe","path":"denmark/central-jutland/arhus","depth":3,"parent":"denmark/central-jutland","children":["aarhus-c"]});
export const childModules = Object.freeze({"aarhus-c":"./aarhus-c/aarhus-c.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
