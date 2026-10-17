// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rheinhausen","repository":"europe","path":"germany/north-rhine-westphalia/rheinhausen","depth":3,"parent":"germany/north-rhine-westphalia","children":["rheinhausen-mitte","schwarzenberg"]});
export const childModules = Object.freeze({"rheinhausen-mitte":"./rheinhausen-mitte/rheinhausen-mitte.js","schwarzenberg":"./schwarzenberg/schwarzenberg.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
