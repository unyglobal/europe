// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"les-escaldes","repository":"europe","path":"andorra/escaldes-engordany/les-escaldes","depth":3,"parent":"andorra/escaldes-engordany","children":["el-barri","urbanitzacio-ermengol-serra","urbanitzacio-la-plana","urbanitzacio-sa-calma"]});
export const childModules = Object.freeze({"el-barri":"./el-barri/el-barri.js","urbanitzacio-ermengol-serra":"./urbanitzacio-ermengol-serra/urbanitzacio-ermengol-serra.js","urbanitzacio-la-plana":"./urbanitzacio-la-plana/urbanitzacio-la-plana.js","urbanitzacio-sa-calma":"./urbanitzacio-sa-calma/urbanitzacio-sa-calma.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
