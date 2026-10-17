// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"buckley","repository":"europe","path":"united-kingdom/wales/buckley","depth":3,"parent":"united-kingdom/wales","children":["coppa-view","nant-mawr"]});
export const childModules = Object.freeze({"coppa-view":"./coppa-view/coppa-view.js","nant-mawr":"./nant-mawr/nant-mawr.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
