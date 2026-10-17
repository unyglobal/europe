// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lipetsk-oblast","repository":"europe","path":"russia/lipetsk-oblast","depth":2,"parent":"russia","children":["dankov","gryazi","lebedyan","lipetsk","usman","yelets"]});
export const childModules = Object.freeze({"dankov":"./dankov/dankov.js","gryazi":"./gryazi/gryazi.js","lebedyan":"./lebedyan/lebedyan.js","lipetsk":"./lipetsk/lipetsk.js","usman":"./usman/usman.js","yelets":"./yelets/yelets.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
