// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"porz-am-rhein","repository":"europe","path":"germany/north-rhine-westphalia/porz-am-rhein","depth":3,"parent":"germany/north-rhine-westphalia","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
