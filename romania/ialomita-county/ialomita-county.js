// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ialomita-county","repository":"europe","path":"romania/ialomita-county","depth":2,"parent":"romania","children":["fetesti","fetesti-gara","slobozia","urziceni"]});
export const childModules = Object.freeze({"fetesti":"./fetesti/fetesti.js","fetesti-gara":"./fetesti-gara/fetesti-gara.js","slobozia":"./slobozia/slobozia.js","urziceni":"./urziceni/urziceni.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
