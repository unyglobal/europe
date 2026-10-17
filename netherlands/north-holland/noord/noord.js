// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"noord","repository":"europe","path":"netherlands/north-holland/noord","depth":3,"parent":"netherlands/north-holland","children":["disteldorp"]});
export const childModules = Object.freeze({"disteldorp":"./disteldorp/disteldorp.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
