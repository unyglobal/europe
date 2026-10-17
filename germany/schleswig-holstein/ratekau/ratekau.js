// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ratekau","repository":"europe","path":"germany/schleswig-holstein/ratekau","depth":3,"parent":"germany/schleswig-holstein","children":["stuckerbusch"]});
export const childModules = Object.freeze({"stuckerbusch":"./stuckerbusch/stuckerbusch.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
