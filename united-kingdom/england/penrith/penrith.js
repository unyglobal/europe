// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"penrith","repository":"europe","path":"united-kingdom/england/penrith","depth":3,"parent":"united-kingdom/england","children":["castletown","fair-hill","gilwilly","scaws","townhead"]});
export const childModules = Object.freeze({"castletown":"./castletown/castletown.js","fair-hill":"./fair-hill/fair-hill.js","gilwilly":"./gilwilly/gilwilly.js","scaws":"./scaws/scaws.js","townhead":"./townhead/townhead.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
