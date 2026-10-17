// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nyvky","repository":"europe","path":"ukraine/kyiv-city/nyvky","depth":3,"parent":"ukraine/kyiv-city","children":["dekhtyari"]});
export const childModules = Object.freeze({"dekhtyari":"./dekhtyari/dekhtyari.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
