// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kirkkonummi","repository":"europe","path":"finland/uusimaa/kirkkonummi","depth":3,"parent":"finland/uusimaa","children":["abrasbacken","kirkkolaakso","kuusala","kyrkvalla","pappilanmaki"]});
export const childModules = Object.freeze({"abrasbacken":"./abrasbacken/abrasbacken.js","kirkkolaakso":"./kirkkolaakso/kirkkolaakso.js","kuusala":"./kuusala/kuusala.js","kyrkvalla":"./kyrkvalla/kyrkvalla.js","pappilanmaki":"./pappilanmaki/pappilanmaki.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
