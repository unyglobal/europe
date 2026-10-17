// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"aberdeen","repository":"europe","path":"united-kingdom/scotland/aberdeen","depth":3,"parent":"united-kingdom/scotland","children":["gilcomston"]});
export const childModules = Object.freeze({"gilcomston":"./gilcomston/gilcomston.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
