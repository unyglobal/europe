// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ticino","repository":"europe","path":"switzerland/ticino","depth":2,"parent":"switzerland","children":["bellinzona","locarno","lugano"]});
export const childModules = Object.freeze({"bellinzona":"./bellinzona/bellinzona.js","locarno":"./locarno/locarno.js","lugano":"./lugano/lugano.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
