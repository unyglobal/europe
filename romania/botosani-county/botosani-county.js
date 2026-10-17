// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"botosani-county","repository":"europe","path":"romania/botosani-county","depth":2,"parent":"romania","children":["botosani","dorohoi"]});
export const childModules = Object.freeze({"botosani":"./botosani/botosani.js","dorohoi":"./dorohoi/dorohoi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
