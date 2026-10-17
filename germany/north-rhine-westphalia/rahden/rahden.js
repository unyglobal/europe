// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rahden","repository":"europe","path":"germany/north-rhine-westphalia/rahden","depth":3,"parent":"germany/north-rhine-westphalia","children":["welle"]});
export const childModules = Object.freeze({"welle":"./welle/welle.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
