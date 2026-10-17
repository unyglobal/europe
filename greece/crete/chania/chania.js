// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chania","repository":"europe","path":"greece/crete/chania","depth":3,"parent":"greece/crete","children":["chania-old-town"]});
export const childModules = Object.freeze({"chania-old-town":"./chania-old-town/chania-old-town.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
