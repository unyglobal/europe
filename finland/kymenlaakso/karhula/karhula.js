// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"karhula","repository":"europe","path":"finland/kymenlaakso/karhula","depth":3,"parent":"finland/kymenlaakso","children":["alahovi","eskola","hortola","kalliokoski","malminki","marttila","suurniitty"]});
export const childModules = Object.freeze({"alahovi":"./alahovi/alahovi.js","eskola":"./eskola/eskola.js","hortola":"./hortola/hortola.js","kalliokoski":"./kalliokoski/kalliokoski.js","malminki":"./malminki/malminki.js","marttila":"./marttila/marttila.js","suurniitty":"./suurniitty/suurniitty.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
