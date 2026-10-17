// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"megimurje","repository":"europe","path":"croatia/megimurje","depth":2,"parent":"croatia","children":["cakovec"]});
export const childModules = Object.freeze({"cakovec":"./cakovec/cakovec.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
