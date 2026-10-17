// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hunedoara-county","repository":"europe","path":"romania/hunedoara-county","depth":2,"parent":"romania","children":["brad","deva","hunedoara","lupeni","orastie","petrila","petrosani","vulcan"]});
export const childModules = Object.freeze({"brad":"./brad/brad.js","deva":"./deva/deva.js","hunedoara":"./hunedoara/hunedoara.js","lupeni":"./lupeni/lupeni.js","orastie":"./orastie/orastie.js","petrila":"./petrila/petrila.js","petrosani":"./petrosani/petrosani.js","vulcan":"./vulcan/vulcan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
