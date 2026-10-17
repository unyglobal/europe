// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zagreb-county","repository":"europe","path":"croatia/zagreb-county","depth":2,"parent":"croatia","children":["samobor","velika-gorica","zapresic"]});
export const childModules = Object.freeze({"samobor":"./samobor/samobor.js","velika-gorica":"./velika-gorica/velika-gorica.js","zapresic":"./zapresic/zapresic.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
