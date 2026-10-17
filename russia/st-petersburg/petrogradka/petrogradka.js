// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"petrogradka","repository":"europe","path":"russia/st-petersburg/petrogradka","depth":3,"parent":"russia/st-petersburg","children":["aptekarskiy"]});
export const childModules = Object.freeze({"aptekarskiy":"./aptekarskiy/aptekarskiy.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
