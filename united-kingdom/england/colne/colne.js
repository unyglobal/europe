// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"colne","repository":"europe","path":"united-kingdom/england/colne","depth":3,"parent":"united-kingdom/england","children":["carry-bridge","lenches","waterside"]});
export const childModules = Object.freeze({"carry-bridge":"./carry-bridge/carry-bridge.js","lenches":"./lenches/lenches.js","waterside":"./waterside/waterside.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
