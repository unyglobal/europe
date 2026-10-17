// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bathgate","repository":"europe","path":"united-kingdom/scotland/bathgate","depth":3,"parent":"united-kingdom/scotland","children":["belvedere","glenmavis","paulville"]});
export const childModules = Object.freeze({"belvedere":"./belvedere/belvedere.js","glenmavis":"./glenmavis/glenmavis.js","paulville":"./paulville/paulville.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
