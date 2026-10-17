// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"new-malden","repository":"europe","path":"united-kingdom/england/new-malden","depth":3,"parent":"united-kingdom/england","children":["beverley"]});
export const childModules = Object.freeze({"beverley":"./beverley/beverley.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
