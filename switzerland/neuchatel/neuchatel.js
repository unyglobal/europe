// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"neuchatel","repository":"europe","path":"switzerland/neuchatel","depth":2,"parent":"switzerland","children":["la-chaux-de-fonds"]});
export const childModules = Object.freeze({"la-chaux-de-fonds":"./la-chaux-de-fonds/la-chaux-de-fonds.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
