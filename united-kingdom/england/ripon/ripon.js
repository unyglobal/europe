// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ripon","repository":"europe","path":"united-kingdom/england/ripon","depth":3,"parent":"united-kingdom/england","children":["bondgate","borrage-green"]});
export const childModules = Object.freeze({"bondgate":"./bondgate/bondgate.js","borrage-green":"./borrage-green/borrage-green.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
