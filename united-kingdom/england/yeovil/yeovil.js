// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"yeovil","repository":"europe","path":"united-kingdom/england/yeovil","depth":3,"parent":"united-kingdom/england","children":["crofton-park","goar-knap"]});
export const childModules = Object.freeze({"crofton-park":"./crofton-park/crofton-park.js","goar-knap":"./goar-knap/goar-knap.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
