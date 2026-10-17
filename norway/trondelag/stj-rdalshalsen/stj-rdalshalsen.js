// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"stj-rdalshalsen","repository":"europe","path":"norway/trondelag/stj-rdalshalsen","depth":3,"parent":"norway/trondelag","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
