// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"washington","repository":"europe","path":"united-kingdom/england/washington","depth":3,"parent":"united-kingdom/england","children":["biddick","columbia","glebe","hertburn"]});
export const childModules = Object.freeze({"biddick":"./biddick/biddick.js","columbia":"./columbia/columbia.js","glebe":"./glebe/glebe.js","hertburn":"./hertburn/hertburn.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
