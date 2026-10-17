// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ennepetal","repository":"europe","path":"germany/north-rhine-westphalia/ennepetal","depth":3,"parent":"germany/north-rhine-westphalia","children":["altenvoerde","wilhelmshohe"]});
export const childModules = Object.freeze({"altenvoerde":"./altenvoerde/altenvoerde.js","wilhelmshohe":"./wilhelmshohe/wilhelmshohe.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
