// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"swansea","repository":"europe","path":"united-kingdom/wales/swansea","depth":3,"parent":"united-kingdom/wales","children":["mount-pleasant"]});
export const childModules = Object.freeze({"mount-pleasant":"./mount-pleasant/mount-pleasant.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
