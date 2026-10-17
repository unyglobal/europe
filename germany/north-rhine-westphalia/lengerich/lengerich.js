// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lengerich","repository":"europe","path":"germany/north-rhine-westphalia/lengerich","depth":3,"parent":"germany/north-rhine-westphalia","children":["intrup"]});
export const childModules = Object.freeze({"intrup":"./intrup/intrup.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
