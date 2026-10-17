// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"iasi-county","repository":"europe","path":"romania/iasi-county","depth":2,"parent":"romania","children":["iasi","pascani"]});
export const childModules = Object.freeze({"iasi":"./iasi/iasi.js","pascani":"./pascani/pascani.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
