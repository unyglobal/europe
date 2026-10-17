// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tsaritsyno","repository":"europe","path":"russia/moscow/tsaritsyno","depth":3,"parent":"russia/moscow","children":["kotlyakovo"]});
export const childModules = Object.freeze({"kotlyakovo":"./kotlyakovo/kotlyakovo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
