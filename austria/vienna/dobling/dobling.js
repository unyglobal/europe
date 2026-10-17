// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dobling","repository":"europe","path":"austria/vienna/dobling","depth":3,"parent":"austria/vienna","children":["grinzing"]});
export const childModules = Object.freeze({"grinzing":"./grinzing/grinzing.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
