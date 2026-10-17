// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"finnmark","repository":"europe","path":"norway/finnmark","depth":2,"parent":"norway","children":["alta"]});
export const childModules = Object.freeze({"alta":"./alta/alta.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
