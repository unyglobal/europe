// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kiel","repository":"europe","path":"germany/schleswig-holstein/kiel","depth":3,"parent":"germany/schleswig-holstein","children":["altstadt","damperhof","vorstadt"]});
export const childModules = Object.freeze({"altstadt":"./altstadt/altstadt.js","damperhof":"./damperhof/damperhof.js","vorstadt":"./vorstadt/vorstadt.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
