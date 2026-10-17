// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ursus","repository":"europe","path":"poland/mazovia/ursus","depth":3,"parent":"poland/mazovia","children":["niedzwiadek"]});
export const childModules = Object.freeze({"niedzwiadek":"./niedzwiadek/niedzwiadek.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
