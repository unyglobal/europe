// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"almasytelep","repository":"europe","path":"hungary/jasz-nagykun-szolnok/szolnok/almasytelep","depth":4,"parent":"hungary/jasz-nagykun-szolnok/szolnok","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
