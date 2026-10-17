// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"johnstone","repository":"europe","path":"united-kingdom/scotland/johnstone","depth":3,"parent":"united-kingdom/scotland","children":["cartside","quarrelton"]});
export const childModules = Object.freeze({"cartside":"./cartside/cartside.js","quarrelton":"./quarrelton/quarrelton.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
