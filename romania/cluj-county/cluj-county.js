// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cluj-county","repository":"europe","path":"romania/cluj-county","depth":2,"parent":"romania","children":["campia-turzii","cluj-napoca","dej","gherla","turda"]});
export const childModules = Object.freeze({"campia-turzii":"./campia-turzii/campia-turzii.js","cluj-napoca":"./cluj-napoca/cluj-napoca.js","dej":"./dej/dej.js","gherla":"./gherla/gherla.js","turda":"./turda/turda.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
