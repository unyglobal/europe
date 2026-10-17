// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"helsing-r","repository":"europe","path":"denmark/capital-region/helsing-r","depth":3,"parent":"denmark/capital-region","children":["lappen"]});
export const childModules = Object.freeze({"lappen":"./lappen/lappen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
