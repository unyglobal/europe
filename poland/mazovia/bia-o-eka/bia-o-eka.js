// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bia-o-eka","repository":"europe","path":"poland/mazovia/bia-o-eka","depth":3,"parent":"poland/mazovia","children":["henrykow"]});
export const childModules = Object.freeze({"henrykow":"./henrykow/henrykow.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
