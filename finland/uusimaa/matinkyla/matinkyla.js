// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"matinkyla","repository":"europe","path":"finland/uusimaa/matinkyla","depth":3,"parent":"finland/uusimaa","children":["mattby"]});
export const childModules = Object.freeze({"mattby":"./mattby/mattby.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
