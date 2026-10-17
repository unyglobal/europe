// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"konstancin-jeziorna","repository":"europe","path":"poland/mazovia/konstancin-jeziorna","depth":3,"parent":"poland/mazovia","children":["jeziorna"]});
export const childModules = Object.freeze({"jeziorna":"./jeziorna/jeziorna.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
