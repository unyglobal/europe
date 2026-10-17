// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cardiff","repository":"europe","path":"united-kingdom/wales/cardiff","depth":3,"parent":"united-kingdom/wales","children":["adamsdown","cathays-park","central","riverside"]});
export const childModules = Object.freeze({"adamsdown":"./adamsdown/adamsdown.js","cathays-park":"./cathays-park/cathays-park.js","central":"./central/central.js","riverside":"./riverside/riverside.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
