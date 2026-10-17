// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vukovar-srijem","repository":"europe","path":"croatia/vukovar-srijem","depth":2,"parent":"croatia","children":["vinkovci","vukovar"]});
export const childModules = Object.freeze({"vinkovci":"./vinkovci/vinkovci.js","vukovar":"./vukovar/vukovar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
