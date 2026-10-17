// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"espoonlahti","repository":"europe","path":"finland/uusimaa/espoonlahti","depth":3,"parent":"finland/uusimaa","children":["espoonlahden-keskus","maininki"]});
export const childModules = Object.freeze({"espoonlahden-keskus":"./espoonlahden-keskus/espoonlahden-keskus.js","maininki":"./maininki/maininki.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
