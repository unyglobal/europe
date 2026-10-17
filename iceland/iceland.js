// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"iceland","repository":"europe","path":"iceland","depth":1,"parent":"","children":["capital-region","northeast","southern-peninsula"]});
export const childModules = Object.freeze({"capital-region":"./capital-region/capital-region.js","northeast":"./northeast/northeast.js","southern-peninsula":"./southern-peninsula/southern-peninsula.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
