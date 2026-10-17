// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"somogy-county","repository":"europe","path":"hungary/somogy-county","depth":2,"parent":"hungary","children":["kaposvar","siofok"]});
export const childModules = Object.freeze({"kaposvar":"./kaposvar/kaposvar.js","siofok":"./siofok/siofok.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
