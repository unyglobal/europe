// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"alfter","repository":"europe","path":"germany/north-rhine-westphalia/alfter","depth":3,"parent":"germany/north-rhine-westphalia","children":["gielsdorf"]});
export const childModules = Object.freeze({"gielsdorf":"./gielsdorf/gielsdorf.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
