// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chisinau-municipality","repository":"europe","path":"moldova/chisinau-municipality","depth":2,"parent":"moldova","children":["chisinau","codru","durlesti"]});
export const childModules = Object.freeze({"chisinau":"./chisinau/chisinau.js","codru":"./codru/codru.js","durlesti":"./durlesti/durlesti.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
