// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"papa","repository":"europe","path":"hungary/veszprem/papa","depth":3,"parent":"hungary/veszprem","children":["borollo","horgaserimajor","kishegy","nagyigalmajor","papaimajor","torzsokhegy"]});
export const childModules = Object.freeze({"borollo":"./borollo/borollo.js","horgaserimajor":"./horgaserimajor/horgaserimajor.js","kishegy":"./kishegy/kishegy.js","nagyigalmajor":"./nagyigalmajor/nagyigalmajor.js","papaimajor":"./papaimajor/papaimajor.js","torzsokhegy":"./torzsokhegy/torzsokhegy.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
