// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zoetermeer","repository":"europe","path":"netherlands/south-holland/zoetermeer","depth":3,"parent":"netherlands/south-holland","children":["driemanspolder"]});
export const childModules = Object.freeze({"driemanspolder":"./driemanspolder/driemanspolder.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
