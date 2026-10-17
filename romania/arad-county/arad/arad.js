// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"arad","repository":"europe","path":"romania/arad-county/arad","depth":3,"parent":"romania/arad-county","children":["bujac","ciala","pepiniera-ceala"]});
export const childModules = Object.freeze({"bujac":"./bujac/bujac.js","ciala":"./ciala/ciala.js","pepiniera-ceala":"./pepiniera-ceala/pepiniera-ceala.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
