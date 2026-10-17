// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"brussels","repository":"europe","path":"belgium/brussels-capital/brussels","depth":3,"parent":"belgium/brussels-capital","children":["dansaert"]});
export const childModules = Object.freeze({"dansaert":"./dansaert/dansaert.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
