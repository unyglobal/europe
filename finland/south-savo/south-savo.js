// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"south-savo","repository":"europe","path":"finland/south-savo","depth":2,"parent":"finland","children":["mikkeli","pieksamaki","savonlinna"]});
export const childModules = Object.freeze({"mikkeli":"./mikkeli/mikkeli.js","pieksamaki":"./pieksamaki/pieksamaki.js","savonlinna":"./savonlinna/savonlinna.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
