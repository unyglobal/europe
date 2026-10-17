// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"south-shields","repository":"europe","path":"united-kingdom/england/south-shields","depth":3,"parent":"united-kingdom/england","children":["mill-dam","the-lawe"]});
export const childModules = Object.freeze({"mill-dam":"./mill-dam/mill-dam.js","the-lawe":"./the-lawe/the-lawe.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
