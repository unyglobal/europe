// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bonnyrigg","repository":"europe","path":"united-kingdom/scotland/bonnyrigg","depth":3,"parent":"united-kingdom/scotland","children":["broomieknowe","eldindean","quarryhead","sherwood","waverley"]});
export const childModules = Object.freeze({"broomieknowe":"./broomieknowe/broomieknowe.js","eldindean":"./eldindean/eldindean.js","quarryhead":"./quarryhead/quarryhead.js","sherwood":"./sherwood/sherwood.js","waverley":"./waverley/waverley.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
