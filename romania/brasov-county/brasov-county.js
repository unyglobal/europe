// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"brasov-county","repository":"europe","path":"romania/brasov-county","depth":2,"parent":"romania","children":["brasov","codlea","fagaras","rasnov","sacele","zarnesti"]});
export const childModules = Object.freeze({"brasov":"./brasov/brasov.js","codlea":"./codlea/codlea.js","fagaras":"./fagaras/fagaras.js","rasnov":"./rasnov/rasnov.js","sacele":"./sacele/sacele.js","zarnesti":"./zarnesti/zarnesti.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
