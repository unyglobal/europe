// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rheinhausen-mitte","repository":"europe","path":"germany/north-rhine-westphalia/rheinhausen/rheinhausen-mitte","depth":4,"parent":"germany/north-rhine-westphalia/rheinhausen","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
