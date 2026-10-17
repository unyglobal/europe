// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"barlad","repository":"europe","path":"romania/vaslui-county/barlad","depth":3,"parent":"romania/vaslui-county","children":["cotu-negru"]});
export const childModules = Object.freeze({"cotu-negru":"./cotu-negru/cotu-negru.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
