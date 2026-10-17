// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chesham","repository":"europe","path":"united-kingdom/england/chesham","depth":3,"parent":"united-kingdom/england","children":["chessmount","waterside"]});
export const childModules = Object.freeze({"chessmount":"./chessmount/chessmount.js","waterside":"./waterside/waterside.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
