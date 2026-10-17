// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"stourbridge","repository":"europe","path":"united-kingdom/england/stourbridge","depth":3,"parent":"united-kingdom/england","children":["old-swinford"]});
export const childModules = Object.freeze({"old-swinford":"./old-swinford/old-swinford.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
