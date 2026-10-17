// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"brixton","repository":"europe","path":"united-kingdom/england/brixton","depth":3,"parent":"united-kingdom/england","children":["coldharbour","herne-hill"]});
export const childModules = Object.freeze({"coldharbour":"./coldharbour/coldharbour.js","herne-hill":"./herne-hill/herne-hill.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
