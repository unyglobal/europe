// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"basingstoke","repository":"europe","path":"united-kingdom/england/basingstoke","depth":3,"parent":"united-kingdom/england","children":["eastrop","south-view"]});
export const childModules = Object.freeze({"eastrop":"./eastrop/eastrop.js","south-view":"./south-view/south-view.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
