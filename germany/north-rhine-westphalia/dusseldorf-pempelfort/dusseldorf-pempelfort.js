// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dusseldorf-pempelfort","repository":"europe","path":"germany/north-rhine-westphalia/dusseldorf-pempelfort","depth":3,"parent":"germany/north-rhine-westphalia","children":["derendorf"]});
export const childModules = Object.freeze({"derendorf":"./derendorf/derendorf.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
