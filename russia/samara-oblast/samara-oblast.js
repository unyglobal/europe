// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"samara-oblast","repository":"europe","path":"russia/samara-oblast","depth":2,"parent":"russia","children":["bezenchuk","chapayevsk","kinel","kinel-cherkassy","neftegorsk","novokuybyshevsk","oktyabr-sk","otradnyy","pokhvistnevo","samara","syzran","tolyatti","zhigulevsk"]});
export const childModules = Object.freeze({"bezenchuk":"./bezenchuk/bezenchuk.js","chapayevsk":"./chapayevsk/chapayevsk.js","kinel":"./kinel/kinel.js","kinel-cherkassy":"./kinel-cherkassy/kinel-cherkassy.js","neftegorsk":"./neftegorsk/neftegorsk.js","novokuybyshevsk":"./novokuybyshevsk/novokuybyshevsk.js","oktyabr-sk":"./oktyabr-sk/oktyabr-sk.js","otradnyy":"./otradnyy/otradnyy.js","pokhvistnevo":"./pokhvistnevo/pokhvistnevo.js","samara":"./samara/samara.js","syzran":"./syzran/syzran.js","tolyatti":"./tolyatti/tolyatti.js","zhigulevsk":"./zhigulevsk/zhigulevsk.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
