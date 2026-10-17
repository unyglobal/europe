// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"karlovy-vary","repository":"europe","path":"czechia/carlsbad-region/karlovy-vary","depth":3,"parent":"czechia/carlsbad-region","children":["bohatice","drahovice"]});
export const childModules = Object.freeze({"bohatice":"./bohatice/bohatice.js","drahovice":"./drahovice/drahovice.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
