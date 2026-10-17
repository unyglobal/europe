// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"uppsala","repository":"europe","path":"sweden/uppsala","depth":2,"parent":"sweden","children":["enkoping","gamla-uppsala"]});
export const childModules = Object.freeze({"enkoping":"./enkoping/enkoping.js","gamla-uppsala":"./gamla-uppsala/gamla-uppsala.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
