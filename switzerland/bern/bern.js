// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bern","repository":"europe","path":"switzerland/bern","depth":2,"parent":"switzerland","children":["biel-bienne","burgdorf","koniz","steffisburg","thun"]});
export const childModules = Object.freeze({"biel-bienne":"./biel-bienne/biel-bienne.js","burgdorf":"./burgdorf/burgdorf.js","koniz":"./koniz/koniz.js","steffisburg":"./steffisburg/steffisburg.js","thun":"./thun/thun.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
