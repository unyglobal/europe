// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sankt-gallen","repository":"europe","path":"switzerland/saint-gallen/sankt-gallen","depth":3,"parent":"switzerland/saint-gallen","children":["innenstadt","linsenbuhl-dreilinden","rosenberg","st-georgen","st-jakob"]});
export const childModules = Object.freeze({"innenstadt":"./innenstadt/innenstadt.js","linsenbuhl-dreilinden":"./linsenbuhl-dreilinden/linsenbuhl-dreilinden.js","rosenberg":"./rosenberg/rosenberg.js","st-georgen":"./st-georgen/st-georgen.js","st-jakob":"./st-jakob/st-jakob.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
