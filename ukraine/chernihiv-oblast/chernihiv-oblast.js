// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chernihiv-oblast","repository":"europe","path":"ukraine/chernihiv-oblast","depth":2,"parent":"ukraine","children":["bakhmach","chernihiv","desnyanskyi","masany","nizhyn","novhorod-siverskyi","novozavodskyi","pryluky"]});
export const childModules = Object.freeze({"bakhmach":"./bakhmach/bakhmach.js","chernihiv":"./chernihiv/chernihiv.js","desnyanskyi":"./desnyanskyi/desnyanskyi.js","masany":"./masany/masany.js","nizhyn":"./nizhyn/nizhyn.js","novhorod-siverskyi":"./novhorod-siverskyi/novhorod-siverskyi.js","novozavodskyi":"./novozavodskyi/novozavodskyi.js","pryluky":"./pryluky/pryluky.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
