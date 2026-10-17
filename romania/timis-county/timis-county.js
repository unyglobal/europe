// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"timis-county","repository":"europe","path":"romania/timis-county","depth":2,"parent":"romania","children":["lugoj","timisoara"]});
export const childModules = Object.freeze({"lugoj":"./lugoj/lugoj.js","timisoara":"./timisoara/timisoara.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
