// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chislehurst","repository":"europe","path":"united-kingdom/england/chislehurst","depth":3,"parent":"united-kingdom/england","children":["chislehurst-west"]});
export const childModules = Object.freeze({"chislehurst-west":"./chislehurst-west/chislehurst-west.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
