// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hohenstein-ernstthal","repository":"europe","path":"germany/saxony/hohenstein-ernstthal","depth":3,"parent":"germany/saxony","children":["hohenstein"]});
export const childModules = Object.freeze({"hohenstein":"./hohenstein/hohenstein.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
