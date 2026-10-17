// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bath","repository":"europe","path":"united-kingdom/england/bath","depth":3,"parent":"united-kingdom/england","children":["bear-flat","beechen-cliff","bloomfield","dolemeads","lyncombe-hill","lyncombe-vale","westmoreland"]});
export const childModules = Object.freeze({"bear-flat":"./bear-flat/bear-flat.js","beechen-cliff":"./beechen-cliff/beechen-cliff.js","bloomfield":"./bloomfield/bloomfield.js","dolemeads":"./dolemeads/dolemeads.js","lyncombe-hill":"./lyncombe-hill/lyncombe-hill.js","lyncombe-vale":"./lyncombe-vale/lyncombe-vale.js","westmoreland":"./westmoreland/westmoreland.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
