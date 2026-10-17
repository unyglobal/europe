// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"berat-county","repository":"europe","path":"albania/berat-county","depth":2,"parent":"albania","children":["berat","kucove"]});
export const childModules = Object.freeze({"berat":"./berat/berat.js","kucove":"./kucove/kucove.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
