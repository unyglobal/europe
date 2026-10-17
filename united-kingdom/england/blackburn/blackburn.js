// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"blackburn","repository":"europe","path":"united-kingdom/england/blackburn","depth":3,"parent":"united-kingdom/england","children":["brookhouse","lower-audley","town-s-moor"]});
export const childModules = Object.freeze({"brookhouse":"./brookhouse/brookhouse.js","lower-audley":"./lower-audley/lower-audley.js","town-s-moor":"./town-s-moor/town-s-moor.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
