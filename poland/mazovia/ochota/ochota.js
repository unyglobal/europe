// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ochota","repository":"europe","path":"poland/mazovia/ochota","depth":3,"parent":"poland/mazovia","children":["stara-ochota"]});
export const childModules = Object.freeze({"stara-ochota":"./stara-ochota/stara-ochota.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
