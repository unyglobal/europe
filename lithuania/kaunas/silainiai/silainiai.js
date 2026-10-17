// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"silainiai","repository":"europe","path":"lithuania/kaunas/silainiai","depth":3,"parent":"lithuania/kaunas","children":["milikoniai"]});
export const childModules = Object.freeze({"milikoniai":"./milikoniai/milikoniai.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
