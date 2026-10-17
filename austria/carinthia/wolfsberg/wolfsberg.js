// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"wolfsberg","repository":"europe","path":"austria/carinthia/wolfsberg","depth":3,"parent":"austria/carinthia","children":["scho-bach","schwemmtratten"]});
export const childModules = Object.freeze({"scho-bach":"./scho-bach/scho-bach.js","schwemmtratten":"./schwemmtratten/schwemmtratten.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
