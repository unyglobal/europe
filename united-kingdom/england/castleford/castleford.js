// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"castleford","repository":"europe","path":"united-kingdom/england/castleford","depth":3,"parent":"united-kingdom/england","children":["half-acres","hightown","round-hill","whitwood-mere"]});
export const childModules = Object.freeze({"half-acres":"./half-acres/half-acres.js","hightown":"./hightown/hightown.js","round-hill":"./round-hill/round-hill.js","whitwood-mere":"./whitwood-mere/whitwood-mere.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
