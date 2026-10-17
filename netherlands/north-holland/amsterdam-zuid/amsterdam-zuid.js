// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"amsterdam-zuid","repository":"europe","path":"netherlands/north-holland/amsterdam-zuid","depth":3,"parent":"netherlands/north-holland","children":["oud-zuid"]});
export const childModules = Object.freeze({"oud-zuid":"./oud-zuid/oud-zuid.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
