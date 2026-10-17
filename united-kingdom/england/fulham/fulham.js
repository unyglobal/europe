// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"fulham","repository":"europe","path":"united-kingdom/england/fulham","depth":3,"parent":"united-kingdom/england","children":["fulham-broadway","walham-green"]});
export const childModules = Object.freeze({"fulham-broadway":"./fulham-broadway/fulham-broadway.js","walham-green":"./walham-green/walham-green.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
