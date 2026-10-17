// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"oer-erkenschwick","repository":"europe","path":"germany/north-rhine-westphalia/oer-erkenschwick","depth":3,"parent":"germany/north-rhine-westphalia","children":["erkenschwick"]});
export const childModules = Object.freeze({"erkenschwick":"./erkenschwick/erkenschwick.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
