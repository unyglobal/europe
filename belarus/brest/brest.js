// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"brest","repository":"europe","path":"belarus/brest","depth":2,"parent":"belarus","children":["baranovichi","byaroza","ivanovo","ivatsevichi","kobryn","luninyets","pinsk","pruzhany"]});
export const childModules = Object.freeze({"baranovichi":"./baranovichi/baranovichi.js","byaroza":"./byaroza/byaroza.js","ivanovo":"./ivanovo/ivanovo.js","ivatsevichi":"./ivatsevichi/ivatsevichi.js","kobryn":"./kobryn/kobryn.js","luninyets":"./luninyets/luninyets.js","pinsk":"./pinsk/pinsk.js","pruzhany":"./pruzhany/pruzhany.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
