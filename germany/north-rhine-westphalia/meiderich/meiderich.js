// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"meiderich","repository":"europe","path":"germany/north-rhine-westphalia/meiderich","depth":3,"parent":"germany/north-rhine-westphalia","children":["mittelmeiderich","untermeiderich"]});
export const childModules = Object.freeze({"mittelmeiderich":"./mittelmeiderich/mittelmeiderich.js","untermeiderich":"./untermeiderich/untermeiderich.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
