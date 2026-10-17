// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"the-hague","repository":"europe","path":"netherlands/south-holland/the-hague","depth":3,"parent":"netherlands/south-holland","children":["centrum","regentessekwartier","zeeheldenkwartier"]});
export const childModules = Object.freeze({"centrum":"./centrum/centrum.js","regentessekwartier":"./regentessekwartier/regentessekwartier.js","zeeheldenkwartier":"./zeeheldenkwartier/zeeheldenkwartier.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
