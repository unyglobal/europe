// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dusseldorf","repository":"europe","path":"germany/north-rhine-westphalia/dusseldorf","depth":3,"parent":"germany/north-rhine-westphalia","children":["stadtbezirk-01"]});
export const childModules = Object.freeze({"stadtbezirk-01":"./stadtbezirk-01/stadtbezirk-01.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
