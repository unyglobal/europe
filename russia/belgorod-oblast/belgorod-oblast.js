// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"belgorod-oblast","repository":"europe","path":"russia/belgorod-oblast","depth":2,"parent":"russia","children":["alexeyevka","belgorod","chernyanka","gorod-shebekino","gubkin","novy-oskol","razumnoye","shebekino","staryy-oskol","stroitel","valuyki"]});
export const childModules = Object.freeze({"alexeyevka":"./alexeyevka/alexeyevka.js","belgorod":"./belgorod/belgorod.js","chernyanka":"./chernyanka/chernyanka.js","gorod-shebekino":"./gorod-shebekino/gorod-shebekino.js","gubkin":"./gubkin/gubkin.js","novy-oskol":"./novy-oskol/novy-oskol.js","razumnoye":"./razumnoye/razumnoye.js","shebekino":"./shebekino/shebekino.js","staryy-oskol":"./staryy-oskol/staryy-oskol.js","stroitel":"./stroitel/stroitel.js","valuyki":"./valuyki/valuyki.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
