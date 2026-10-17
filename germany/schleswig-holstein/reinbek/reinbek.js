// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"reinbek","repository":"europe","path":"germany/schleswig-holstein/reinbek","depth":3,"parent":"germany/schleswig-holstein","children":["alt-reinbek"]});
export const childModules = Object.freeze({"alt-reinbek":"./alt-reinbek/alt-reinbek.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
