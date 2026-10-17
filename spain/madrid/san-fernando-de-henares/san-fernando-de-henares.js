// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-fernando-de-henares","repository":"europe","path":"spain/madrid/san-fernando-de-henares","depth":3,"parent":"spain/madrid","children":["la-canada"]});
export const childModules = Object.freeze({"la-canada":"./la-canada/la-canada.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
