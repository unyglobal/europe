// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vitebsk","repository":"europe","path":"belarus/vitebsk","depth":2,"parent":"belarus","children":["hlybokaye","lyepyel","novopolotsk","orsha","pastavy","polotsk"]});
export const childModules = Object.freeze({"hlybokaye":"./hlybokaye/hlybokaye.js","lyepyel":"./lyepyel/lyepyel.js","novopolotsk":"./novopolotsk/novopolotsk.js","orsha":"./orsha/orsha.js","pastavy":"./pastavy/pastavy.js","polotsk":"./polotsk/polotsk.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
