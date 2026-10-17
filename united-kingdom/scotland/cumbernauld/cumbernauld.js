// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cumbernauld","repository":"europe","path":"united-kingdom/scotland/cumbernauld","depth":3,"parent":"united-kingdom/scotland","children":["carbrain","seafar"]});
export const childModules = Object.freeze({"carbrain":"./carbrain/carbrain.js","seafar":"./seafar/seafar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
