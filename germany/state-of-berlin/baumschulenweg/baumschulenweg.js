// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"baumschulenweg","repository":"europe","path":"germany/state-of-berlin/baumschulenweg","depth":3,"parent":"germany/state-of-berlin","children":["marienthal"]});
export const childModules = Object.freeze({"marienthal":"./marienthal/marienthal.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
