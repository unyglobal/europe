// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"schleswig","repository":"europe","path":"germany/schleswig-holstein/schleswig","depth":3,"parent":"germany/schleswig-holstein","children":["altstadt","holm","johannistal","klosterhof","sankt-jurgen"]});
export const childModules = Object.freeze({"altstadt":"./altstadt/altstadt.js","holm":"./holm/holm.js","johannistal":"./johannistal/johannistal.js","klosterhof":"./klosterhof/klosterhof.js","sankt-jurgen":"./sankt-jurgen/sankt-jurgen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
