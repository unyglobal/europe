// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"aberystwyth","repository":"europe","path":"united-kingdom/wales/aberystwyth","depth":3,"parent":"united-kingdom/wales","children":["buarth-mawr","trefechan"]});
export const childModules = Object.freeze({"buarth-mawr":"./buarth-mawr/buarth-mawr.js","trefechan":"./trefechan/trefechan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
