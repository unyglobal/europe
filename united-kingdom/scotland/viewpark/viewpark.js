// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"viewpark","repository":"europe","path":"united-kingdom/scotland/viewpark","depth":3,"parent":"united-kingdom/scotland","children":["fallside"]});
export const childModules = Object.freeze({"fallside":"./fallside/fallside.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
