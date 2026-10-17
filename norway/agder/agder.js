// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"agder","repository":"europe","path":"norway/agder","depth":2,"parent":"norway","children":["arendal","grimstad","kristiansand"]});
export const childModules = Object.freeze({"arendal":"./arendal/arendal.js","grimstad":"./grimstad/grimstad.js","kristiansand":"./kristiansand/kristiansand.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
