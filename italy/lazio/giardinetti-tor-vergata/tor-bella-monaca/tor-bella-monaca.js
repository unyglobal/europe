// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tor-bella-monaca","repository":"europe","path":"italy/lazio/giardinetti-tor-vergata/tor-bella-monaca","depth":4,"parent":"italy/lazio/giardinetti-tor-vergata","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
