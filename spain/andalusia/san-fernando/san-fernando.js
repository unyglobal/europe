// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-fernando","repository":"europe","path":"spain/andalusia/san-fernando","depth":3,"parent":"spain/andalusia","children":["san-carlos"]});
export const childModules = Object.freeze({"san-carlos":"./san-carlos/san-carlos.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
