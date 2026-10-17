// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"trowbridge","repository":"europe","path":"united-kingdom/england/trowbridge","depth":3,"parent":"united-kingdom/england","children":["longfield","lower-studley"]});
export const childModules = Object.freeze({"longfield":"./longfield/longfield.js","lower-studley":"./lower-studley/lower-studley.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
