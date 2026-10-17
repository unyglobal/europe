// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pitsea","repository":"europe","path":"united-kingdom/england/pitsea","depth":3,"parent":"united-kingdom/england","children":["chalvedon","eversley"]});
export const childModules = Object.freeze({"chalvedon":"./chalvedon/chalvedon.js","eversley":"./eversley/eversley.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
