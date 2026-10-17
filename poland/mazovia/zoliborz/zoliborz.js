// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zoliborz","repository":"europe","path":"poland/mazovia/zoliborz","depth":3,"parent":"poland/mazovia","children":["marymont-potok","stary-zoliborz"]});
export const childModules = Object.freeze({"marymont-potok":"./marymont-potok/marymont-potok.js","stary-zoliborz":"./stary-zoliborz/stary-zoliborz.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
