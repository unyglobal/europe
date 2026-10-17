// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dubrovnik-neretva","repository":"europe","path":"croatia/dubrovnik-neretva","depth":2,"parent":"croatia","children":["dubrovnik"]});
export const childModules = Object.freeze({"dubrovnik":"./dubrovnik/dubrovnik.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
