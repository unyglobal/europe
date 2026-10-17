// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"republic-of-tyva","repository":"europe","path":"russia/republic-of-tyva","depth":2,"parent":"russia","children":["kyzyl"]});
export const childModules = Object.freeze({"kyzyl":"./kyzyl/kyzyl.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
