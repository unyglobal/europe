// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sundbyberg","repository":"europe","path":"sweden/stockholm/sundbyberg","depth":3,"parent":"sweden/stockholm","children":["centrala-sundbyberg","lilla-alby","storskogen"]});
export const childModules = Object.freeze({"centrala-sundbyberg":"./centrala-sundbyberg/centrala-sundbyberg.js","lilla-alby":"./lilla-alby/lilla-alby.js","storskogen":"./storskogen/storskogen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
