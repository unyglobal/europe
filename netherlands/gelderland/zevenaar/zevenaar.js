// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zevenaar","repository":"europe","path":"netherlands/gelderland/zevenaar","depth":3,"parent":"netherlands/gelderland","children":["zonnemaat"]});
export const childModules = Object.freeze({"zonnemaat":"./zonnemaat/zonnemaat.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
