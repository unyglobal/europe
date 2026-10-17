// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sighisoara","repository":"europe","path":"romania/mures-county/sighisoara","depth":3,"parent":"romania/mures-county","children":["bendorf","rusu","valea-crisului"]});
export const childModules = Object.freeze({"bendorf":"./bendorf/bendorf.js","rusu":"./rusu/rusu.js","valea-crisului":"./valea-crisului/valea-crisului.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
