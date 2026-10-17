// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"geneva","repository":"europe","path":"switzerland/geneva","depth":2,"parent":"switzerland","children":["carouge","lancy","meyrin","onex","vernier"]});
export const childModules = Object.freeze({"carouge":"./carouge/carouge.js","lancy":"./lancy/lancy.js","meyrin":"./meyrin/meyrin.js","onex":"./onex/onex.js","vernier":"./vernier/vernier.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
