// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"minsk-city","repository":"europe","path":"belarus/minsk-city","depth":2,"parent":"belarus","children":["minsk"]});
export const childModules = Object.freeze({"minsk":"./minsk/minsk.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
