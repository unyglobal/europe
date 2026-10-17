// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dabas","repository":"europe","path":"hungary/pest-county/dabas","depth":3,"parent":"hungary/pest-county","children":["birkastanya","csardai-tanyak","dinnyestanya","szivostanya"]});
export const childModules = Object.freeze({"birkastanya":"./birkastanya/birkastanya.js","csardai-tanyak":"./csardai-tanyak/csardai-tanyak.js","dinnyestanya":"./dinnyestanya/dinnyestanya.js","szivostanya":"./szivostanya/szivostanya.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
