// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rembertow","repository":"europe","path":"poland/mazovia/rembertow","depth":3,"parent":"poland/mazovia","children":["nowy-rembertow","stary-rembertow"]});
export const childModules = Object.freeze({"nowy-rembertow":"./nowy-rembertow/nowy-rembertow.js","stary-rembertow":"./stary-rembertow/stary-rembertow.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
