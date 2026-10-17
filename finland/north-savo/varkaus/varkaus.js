// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"varkaus","repository":"europe","path":"finland/north-savo/varkaus","depth":3,"parent":"finland/north-savo","children":["joutenlahti","taulumaki"]});
export const childModules = Object.freeze({"joutenlahti":"./joutenlahti/joutenlahti.js","taulumaki":"./taulumaki/taulumaki.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
