// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cluj-napoca","repository":"europe","path":"romania/cluj-county/cluj-napoca","depth":3,"parent":"romania/cluj-county","children":["andrei-muresanu"]});
export const childModules = Object.freeze({"andrei-muresanu":"./andrei-muresanu/andrei-muresanu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
