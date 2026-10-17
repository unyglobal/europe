// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kruje","repository":"europe","path":"albania/durres-county/kruje","depth":3,"parent":"albania/durres-county","children":["bellaj","berbere"]});
export const childModules = Object.freeze({"bellaj":"./bellaj/bellaj.js","berbere":"./berbere/berbere.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
