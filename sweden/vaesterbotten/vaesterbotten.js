// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vaesterbotten","repository":"europe","path":"sweden/vaesterbotten","depth":2,"parent":"sweden","children":["skelleftea","umea"]});
export const childModules = Object.freeze({"skelleftea":"./skelleftea/skelleftea.js","umea":"./umea/umea.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
