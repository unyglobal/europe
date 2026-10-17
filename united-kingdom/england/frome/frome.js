// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"frome","repository":"europe","path":"united-kingdom/england/frome","depth":3,"parent":"united-kingdom/england","children":["critchill","the-butts"]});
export const childModules = Object.freeze({"critchill":"./critchill/critchill.js","the-butts":"./the-butts/the-butts.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
