// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pardubice-region","repository":"europe","path":"czechia/pardubice-region","depth":2,"parent":"czechia","children":["chrudim","pardubice","svitavy"]});
export const childModules = Object.freeze({"chrudim":"./chrudim/chrudim.js","pardubice":"./pardubice/pardubice.js","svitavy":"./svitavy/svitavy.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
