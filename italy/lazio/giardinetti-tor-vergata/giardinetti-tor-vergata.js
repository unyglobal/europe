// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"giardinetti-tor-vergata","repository":"europe","path":"italy/lazio/giardinetti-tor-vergata","depth":3,"parent":"italy/lazio","children":["tor-bella-monaca","tor-vergata"]});
export const childModules = Object.freeze({"tor-bella-monaca":"./tor-bella-monaca/tor-bella-monaca.js","tor-vergata":"./tor-vergata/tor-vergata.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
