// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cambuslang","repository":"europe","path":"united-kingdom/scotland/cambuslang","depth":3,"parent":"united-kingdom/scotland","children":["vicarland"]});
export const childModules = Object.freeze({"vicarland":"./vicarland/vicarland.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
