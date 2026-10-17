// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dumfries","repository":"europe","path":"united-kingdom/scotland/dumfries","depth":3,"parent":"united-kingdom/scotland","children":["laurieknowe","nithside","summerville","troqueer"]});
export const childModules = Object.freeze({"laurieknowe":"./laurieknowe/laurieknowe.js","nithside":"./nithside/nithside.js","summerville":"./summerville/summerville.js","troqueer":"./troqueer/troqueer.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
