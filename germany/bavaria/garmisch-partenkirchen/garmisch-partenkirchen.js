// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"garmisch-partenkirchen","repository":"europe","path":"germany/bavaria/garmisch-partenkirchen","depth":3,"parent":"germany/bavaria","children":["garmisch","partenkirchen"]});
export const childModules = Object.freeze({"garmisch":"./garmisch/garmisch.js","partenkirchen":"./partenkirchen/partenkirchen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
