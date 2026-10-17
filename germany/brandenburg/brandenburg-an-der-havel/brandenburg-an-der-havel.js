// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"brandenburg-an-der-havel","repository":"europe","path":"germany/brandenburg/brandenburg-an-der-havel","depth":3,"parent":"germany/brandenburg","children":["altstadt"]});
export const childModules = Object.freeze({"altstadt":"./altstadt/altstadt.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
