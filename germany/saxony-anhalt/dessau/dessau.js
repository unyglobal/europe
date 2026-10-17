// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dessau","repository":"europe","path":"germany/saxony-anhalt/dessau","depth":3,"parent":"germany/saxony-anhalt","children":["wallwitzhafen"]});
export const childModules = Object.freeze({"wallwitzhafen":"./wallwitzhafen/wallwitzhafen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
