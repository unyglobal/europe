// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"universitats-und-hansestadt-greifswald","repository":"europe","path":"germany/mecklenburg-vorpommern/universitats-und-hansestadt-greifswald","depth":3,"parent":"germany/mecklenburg-vorpommern","children":["nordliche-muhlenvorstadt","schonwalde-eins","sudstadt"]});
export const childModules = Object.freeze({"nordliche-muhlenvorstadt":"./nordliche-muhlenvorstadt/nordliche-muhlenvorstadt.js","schonwalde-eins":"./schonwalde-eins/schonwalde-eins.js","sudstadt":"./sudstadt/sudstadt.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
