// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zilina-region","repository":"europe","path":"slovakia/zilina-region","depth":2,"parent":"slovakia","children":["cadca","dolny-kubin","liptovsky-mikulas","martin","ruzomberok","zilina"]});
export const childModules = Object.freeze({"cadca":"./cadca/cadca.js","dolny-kubin":"./dolny-kubin/dolny-kubin.js","liptovsky-mikulas":"./liptovsky-mikulas/liptovsky-mikulas.js","martin":"./martin/martin.js","ruzomberok":"./ruzomberok/ruzomberok.js","zilina":"./zilina/zilina.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
