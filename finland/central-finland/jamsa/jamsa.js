// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jamsa","repository":"europe","path":"finland/central-finland/jamsa","depth":3,"parent":"finland/central-finland","children":["hiidenmaki","lammaskmaki"]});
export const childModules = Object.freeze({"hiidenmaki":"./hiidenmaki/hiidenmaki.js","lammaskmaki":"./lammaskmaki/lammaskmaki.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
