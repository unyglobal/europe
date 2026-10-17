// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gorodishche","repository":"europe","path":"russia/volgograd-oblast/gorodishche","depth":3,"parent":"russia/volgograd-oblast","children":["aleksandrovka"]});
export const childModules = Object.freeze({"aleksandrovka":"./aleksandrovka/aleksandrovka.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
