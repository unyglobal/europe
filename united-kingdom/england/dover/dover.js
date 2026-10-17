// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dover","repository":"europe","path":"united-kingdom/england/dover","depth":3,"parent":"united-kingdom/england","children":["clarendon","western-heights"]});
export const childModules = Object.freeze({"clarendon":"./clarendon/clarendon.js","western-heights":"./western-heights/western-heights.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
