// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lidingo","repository":"europe","path":"sweden/stockholm/lidingo","depth":3,"parent":"sweden/stockholm","children":["herserud","islinge","torsvik"]});
export const childModules = Object.freeze({"herserud":"./herserud/herserud.js","islinge":"./islinge/islinge.js","torsvik":"./torsvik/torsvik.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
