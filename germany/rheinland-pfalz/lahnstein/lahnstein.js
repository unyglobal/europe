// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lahnstein","repository":"europe","path":"germany/rheinland-pfalz/lahnstein","depth":3,"parent":"germany/rheinland-pfalz","children":["oberlahnstein"]});
export const childModules = Object.freeze({"oberlahnstein":"./oberlahnstein/oberlahnstein.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
