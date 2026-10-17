// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"livorno","repository":"europe","path":"italy/tuscany/livorno","depth":3,"parent":"italy/tuscany","children":["fiume-bagni","petrarca"]});
export const childModules = Object.freeze({"fiume-bagni":"./fiume-bagni/fiume-bagni.js","petrarca":"./petrarca/petrarca.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
