// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"halstenbek","repository":"europe","path":"germany/schleswig-holstein/halstenbek","depth":3,"parent":"germany/schleswig-holstein","children":["bartelskamp-osterrade","hall","halstenbek-west"]});
export const childModules = Object.freeze({"bartelskamp-osterrade":"./bartelskamp-osterrade/bartelskamp-osterrade.js","hall":"./hall/hall.js","halstenbek-west":"./halstenbek-west/halstenbek-west.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
