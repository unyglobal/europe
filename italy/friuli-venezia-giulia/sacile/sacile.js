// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sacile","repository":"europe","path":"italy/friuli-venezia-giulia/sacile","depth":3,"parent":"italy/friuli-venezia-giulia","children":["san-michele-di-sacile"]});
export const childModules = Object.freeze({"san-michele-di-sacile":"./san-michele-di-sacile/san-michele-di-sacile.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
