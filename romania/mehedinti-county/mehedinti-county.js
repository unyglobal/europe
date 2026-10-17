// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mehedinti-county","repository":"europe","path":"romania/mehedinti-county","depth":2,"parent":"romania","children":["drobeta-turnu-severin"]});
export const childModules = Object.freeze({"drobeta-turnu-severin":"./drobeta-turnu-severin/drobeta-turnu-severin.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
