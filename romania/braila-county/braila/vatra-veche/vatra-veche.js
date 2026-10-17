// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vatra-veche","repository":"europe","path":"romania/braila-county/braila/vatra-veche","depth":4,"parent":"romania/braila-county/braila","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
