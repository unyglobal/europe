// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"aanekoski","repository":"europe","path":"finland/central-finland/aanekoski","depth":3,"parent":"finland/central-finland","children":["hiskinmaki","piilolanniemi","pukkimaki"]});
export const childModules = Object.freeze({"hiskinmaki":"./hiskinmaki/hiskinmaki.js","piilolanniemi":"./piilolanniemi/piilolanniemi.js","pukkimaki":"./pukkimaki/pukkimaki.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
