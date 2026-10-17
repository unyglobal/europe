// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"clydebank","repository":"europe","path":"united-kingdom/scotland/clydebank","depth":3,"parent":"united-kingdom/scotland","children":["kilbowie","radnor-park"]});
export const childModules = Object.freeze({"kilbowie":"./kilbowie/kilbowie.js","radnor-park":"./radnor-park/radnor-park.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
