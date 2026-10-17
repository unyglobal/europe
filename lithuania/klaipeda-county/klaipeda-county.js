// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"klaipeda-county","repository":"europe","path":"lithuania/klaipeda-county","depth":2,"parent":"lithuania","children":["gargzdai","klaipeda","kretinga","palanga"]});
export const childModules = Object.freeze({"gargzdai":"./gargzdai/gargzdai.js","klaipeda":"./klaipeda/klaipeda.js","kretinga":"./kretinga/kretinga.js","palanga":"./palanga/palanga.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
