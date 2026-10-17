// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"blekinge","repository":"europe","path":"sweden/blekinge","depth":2,"parent":"sweden","children":["karlshamn","karlskrona"]});
export const childModules = Object.freeze({"karlshamn":"./karlshamn/karlshamn.js","karlskrona":"./karlskrona/karlskrona.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
