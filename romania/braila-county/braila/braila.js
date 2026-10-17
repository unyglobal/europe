// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"braila","repository":"europe","path":"romania/braila-county/braila","depth":3,"parent":"romania/braila-county","children":["vatra-veche"]});
export const childModules = Object.freeze({"vatra-veche":"./vatra-veche/vatra-veche.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
