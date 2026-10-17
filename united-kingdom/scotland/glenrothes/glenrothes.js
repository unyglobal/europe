// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"glenrothes","repository":"europe","path":"united-kingdom/scotland/glenrothes","depth":3,"parent":"united-kingdom/scotland","children":["auchmuty","queensway","south-parks"]});
export const childModules = Object.freeze({"auchmuty":"./auchmuty/auchmuty.js","queensway":"./queensway/queensway.js","south-parks":"./south-parks/south-parks.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
