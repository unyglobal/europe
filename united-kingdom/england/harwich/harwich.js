// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"harwich","repository":"europe","path":"united-kingdom/england/harwich","depth":3,"parent":"united-kingdom/england","children":["bath-side","outer-part-of-town-eastward"]});
export const childModules = Object.freeze({"bath-side":"./bath-side/bath-side.js","outer-part-of-town-eastward":"./outer-part-of-town-eastward/outer-part-of-town-eastward.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
