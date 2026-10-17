// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"aurillac","repository":"europe","path":"france/auvergne-rhone-alpes/aurillac","depth":3,"parent":"france/auvergne-rhone-alpes","children":["les-alouettes"]});
export const childModules = Object.freeze({"les-alouettes":"./les-alouettes/les-alouettes.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
