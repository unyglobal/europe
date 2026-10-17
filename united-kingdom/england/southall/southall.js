// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"southall","repository":"europe","path":"united-kingdom/england/southall","depth":3,"parent":"united-kingdom/england","children":["southall-broadway"]});
export const childModules = Object.freeze({"southall-broadway":"./southall-broadway/southall-broadway.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
