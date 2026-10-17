// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"neath","repository":"europe","path":"united-kingdom/wales/neath","depth":3,"parent":"united-kingdom/wales","children":["ty-n-y-caeau"]});
export const childModules = Object.freeze({"ty-n-y-caeau":"./ty-n-y-caeau/ty-n-y-caeau.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
