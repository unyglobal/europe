// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bremen","repository":"europe","path":"germany/bremen","depth":2,"parent":"germany","children":["bremerhaven","burglesum","vegesack"]});
export const childModules = Object.freeze({"bremerhaven":"./bremerhaven/bremerhaven.js","burglesum":"./burglesum/burglesum.js","vegesack":"./vegesack/vegesack.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
