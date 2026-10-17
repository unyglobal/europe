// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pohja-tallinn","repository":"europe","path":"estonia/harjumaa/pohja-tallinn","depth":3,"parent":"estonia/harjumaa","children":["pelguranna","sitsi","telliskopli"]});
export const childModules = Object.freeze({"pelguranna":"./pelguranna/pelguranna.js","sitsi":"./sitsi/sitsi.js","telliskopli":"./telliskopli/telliskopli.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
