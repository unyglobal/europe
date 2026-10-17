// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"newton-abbot","repository":"europe","path":"united-kingdom/england/newton-abbot","depth":3,"parent":"united-kingdom/england","children":["abbotsbury","broadlands","knowles-hill","wolborough"]});
export const childModules = Object.freeze({"abbotsbury":"./abbotsbury/abbotsbury.js","broadlands":"./broadlands/broadlands.js","knowles-hill":"./knowles-hill/knowles-hill.js","wolborough":"./wolborough/wolborough.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
