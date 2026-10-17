// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pafos","repository":"europe","path":"cyprus/pafos","depth":2,"parent":"cyprus","children":["paphos"]});
export const childModules = Object.freeze({"paphos":"./paphos/paphos.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
