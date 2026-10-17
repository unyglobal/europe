// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"saltash","repository":"europe","path":"united-kingdom/england/saltash","depth":3,"parent":"united-kingdom/england","children":["burraton","burraton-coombe","south-pill","st-stephens","wearde"]});
export const childModules = Object.freeze({"burraton":"./burraton/burraton.js","burraton-coombe":"./burraton-coombe/burraton-coombe.js","south-pill":"./south-pill/south-pill.js","st-stephens":"./st-stephens/st-stephens.js","wearde":"./wearde/wearde.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
