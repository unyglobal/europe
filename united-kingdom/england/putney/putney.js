// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"putney","repository":"europe","path":"united-kingdom/england/putney","depth":3,"parent":"united-kingdom/england","children":["thamesfield"]});
export const childModules = Object.freeze({"thamesfield":"./thamesfield/thamesfield.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
