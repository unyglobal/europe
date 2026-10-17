// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bod","repository":"europe","path":"norway/nordland/bod","depth":3,"parent":"norway/nordland","children":["vestbyen"]});
export const childModules = Object.freeze({"vestbyen":"./vestbyen/vestbyen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
