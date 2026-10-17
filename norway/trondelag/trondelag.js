// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"trondelag","repository":"europe","path":"norway/trondelag","depth":2,"parent":"norway","children":["levanger","stj-rdalshalsen","trondheim"]});
export const childModules = Object.freeze({"levanger":"./levanger/levanger.js","stj-rdalshalsen":"./stj-rdalshalsen/stj-rdalshalsen.js","trondheim":"./trondheim/trondheim.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
