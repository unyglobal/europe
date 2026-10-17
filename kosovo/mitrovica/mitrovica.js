// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mitrovica","repository":"europe","path":"kosovo/mitrovica","depth":2,"parent":"kosovo","children":["leposaviq","mitrovice","vushtrri","zvecan"]});
export const childModules = Object.freeze({"leposaviq":"./leposaviq/leposaviq.js","mitrovice":"./mitrovice/mitrovice.js","vushtrri":"./vushtrri/vushtrri.js","zvecan":"./zvecan/zvecan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
