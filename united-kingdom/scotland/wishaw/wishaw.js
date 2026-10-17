// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"wishaw","repository":"europe","path":"united-kingdom/scotland/wishaw","depth":3,"parent":"united-kingdom/scotland","children":["dimsdale","greenhead","pather","waterloo"]});
export const childModules = Object.freeze({"dimsdale":"./dimsdale/dimsdale.js","greenhead":"./greenhead/greenhead.js","pather":"./pather/pather.js","waterloo":"./waterloo/waterloo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
