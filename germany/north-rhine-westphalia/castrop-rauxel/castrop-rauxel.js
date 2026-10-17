// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"castrop-rauxel","repository":"europe","path":"germany/north-rhine-westphalia/castrop-rauxel","depth":3,"parent":"germany/north-rhine-westphalia","children":["castroperholz","rauxel"]});
export const childModules = Object.freeze({"castroperholz":"./castroperholz/castroperholz.js","rauxel":"./rauxel/rauxel.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
