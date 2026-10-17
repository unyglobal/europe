// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"huelva","repository":"europe","path":"spain/andalusia/huelva","depth":3,"parent":"spain/andalusia","children":["tres-ventanas"]});
export const childModules = Object.freeze({"tres-ventanas":"./tres-ventanas/tres-ventanas.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
