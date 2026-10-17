// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"porvoo","repository":"europe","path":"finland/uusimaa/porvoo","depth":3,"parent":"finland/uusimaa","children":["antinmaki","gamla-stan","nasi","porvoonportti"]});
export const childModules = Object.freeze({"antinmaki":"./antinmaki/antinmaki.js","gamla-stan":"./gamla-stan/gamla-stan.js","nasi":"./nasi/nasi.js","porvoonportti":"./porvoonportti/porvoonportti.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
