// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vuosaari","repository":"europe","path":"finland/uusimaa/vuosaari","depth":3,"parent":"finland/uusimaa","children":["aurinkolahti"]});
export const childModules = Object.freeze({"aurinkolahti":"./aurinkolahti/aurinkolahti.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
