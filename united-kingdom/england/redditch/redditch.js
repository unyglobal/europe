// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"redditch","repository":"europe","path":"united-kingdom/england/redditch","depth":3,"parent":"united-kingdom/england","children":["batchley","enfield","smallwood","southcrest","st-georges"]});
export const childModules = Object.freeze({"batchley":"./batchley/batchley.js","enfield":"./enfield/enfield.js","smallwood":"./smallwood/smallwood.js","southcrest":"./southcrest/southcrest.js","st-georges":"./st-georges/st-georges.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
