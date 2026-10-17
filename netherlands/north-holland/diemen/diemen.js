// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"diemen","repository":"europe","path":"netherlands/north-holland/diemen","depth":3,"parent":"netherlands/north-holland","children":["diemen-zuid","oud-diemen"]});
export const childModules = Object.freeze({"diemen-zuid":"./diemen-zuid/diemen-zuid.js","oud-diemen":"./oud-diemen/oud-diemen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
