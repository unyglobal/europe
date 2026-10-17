// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nitra-region","repository":"europe","path":"slovakia/nitra-region","depth":2,"parent":"slovakia","children":["levice","nitra","nove-zamky","sala","topolcany"]});
export const childModules = Object.freeze({"levice":"./levice/levice.js","nitra":"./nitra/nitra.js","nove-zamky":"./nove-zamky/nove-zamky.js","sala":"./sala/sala.js","topolcany":"./topolcany/topolcany.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
