// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"saint-gallen","repository":"europe","path":"switzerland/saint-gallen","depth":2,"parent":"switzerland","children":["gossau","jona","rapperswil","sankt-gallen","wil"]});
export const childModules = Object.freeze({"gossau":"./gossau/gossau.js","jona":"./jona/jona.js","rapperswil":"./rapperswil/rapperswil.js","sankt-gallen":"./sankt-gallen/sankt-gallen.js","wil":"./wil/wil.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
