// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"welwyn-garden-city","repository":"europe","path":"united-kingdom/england/welwyn-garden-city","depth":3,"parent":"united-kingdom/england","children":["handside","peartree","sherrardspark"]});
export const childModules = Object.freeze({"handside":"./handside/handside.js","peartree":"./peartree/peartree.js","sherrardspark":"./sherrardspark/sherrardspark.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
