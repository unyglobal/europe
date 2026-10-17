// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zeeland","repository":"europe","path":"netherlands/zeeland","depth":2,"parent":"netherlands","children":["borssele","goes","middelburg","terneuzen","vlissingen"]});
export const childModules = Object.freeze({"borssele":"./borssele/borssele.js","goes":"./goes/goes.js","middelburg":"./middelburg/middelburg.js","terneuzen":"./terneuzen/terneuzen.js","vlissingen":"./vlissingen/vlissingen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
