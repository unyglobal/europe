// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sudak","repository":"europe","path":"ukraine/crimea/sudak","depth":3,"parent":"ukraine/crimea","children":["pivdenno-zakhidnyi"]});
export const childModules = Object.freeze({"pivdenno-zakhidnyi":"./pivdenno-zakhidnyi/pivdenno-zakhidnyi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
