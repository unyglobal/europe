// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gohlis","repository":"europe","path":"germany/saxony/gohlis","depth":3,"parent":"germany/saxony","children":["gohlis-mitte"]});
export const childModules = Object.freeze({"gohlis-mitte":"./gohlis-mitte/gohlis-mitte.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
