// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"khakasiya-republic","repository":"europe","path":"russia/khakasiya-republic","depth":2,"parent":"russia","children":["abakan","abaza","chernogorsk","sayanogorsk"]});
export const childModules = Object.freeze({"abakan":"./abakan/abakan.js","abaza":"./abaza/abaza.js","chernogorsk":"./chernogorsk/chernogorsk.js","sayanogorsk":"./sayanogorsk/sayanogorsk.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
