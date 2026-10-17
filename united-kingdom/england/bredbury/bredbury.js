// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bredbury","repository":"europe","path":"united-kingdom/england/bredbury","depth":3,"parent":"united-kingdom/england","children":["arden-park","barrack-hill"]});
export const childModules = Object.freeze({"arden-park":"./arden-park/arden-park.js","barrack-hill":"./barrack-hill/barrack-hill.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
