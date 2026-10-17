// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"voorschoten","repository":"europe","path":"netherlands/south-holland/voorschoten","depth":3,"parent":"netherlands/south-holland","children":["vlietwijk"]});
export const childModules = Object.freeze({"vlietwijk":"./vlietwijk/vlietwijk.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
