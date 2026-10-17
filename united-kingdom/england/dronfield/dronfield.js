// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dronfield","repository":"europe","path":"united-kingdom/england/dronfield","depth":3,"parent":"united-kingdom/england","children":["gosforth-valley","hill-top","holmley-common","snape-hill","summerwood-top"]});
export const childModules = Object.freeze({"gosforth-valley":"./gosforth-valley/gosforth-valley.js","hill-top":"./hill-top/hill-top.js","holmley-common":"./holmley-common/holmley-common.js","snape-hill":"./snape-hill/snape-hill.js","summerwood-top":"./summerwood-top/summerwood-top.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
