// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"riihimaki","repository":"europe","path":"finland/kanta-haeme/riihimaki","depth":3,"parent":"finland/kanta-haeme","children":["jokikyla","koivistonmaki","peltosaari","suokyla"]});
export const childModules = Object.freeze({"jokikyla":"./jokikyla/jokikyla.js","koivistonmaki":"./koivistonmaki/koivistonmaki.js","peltosaari":"./peltosaari/peltosaari.js","suokyla":"./suokyla/suokyla.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
