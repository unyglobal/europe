// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"volgograd-oblast","repository":"europe","path":"russia/volgograd-oblast","depth":2,"parent":"russia","children":["dubovka","frolovo","gorodishche","kalach-na-donu","kamyshin","kotel-nikovo","kotovo","leninsk","mikhaylovka","nikolayevsk","novoanninskiy","pallasovka","surovikino","uryupinsk","volgograd","volzhsky","yelan","zhirnovsk"]});
export const childModules = Object.freeze({"dubovka":"./dubovka/dubovka.js","frolovo":"./frolovo/frolovo.js","gorodishche":"./gorodishche/gorodishche.js","kalach-na-donu":"./kalach-na-donu/kalach-na-donu.js","kamyshin":"./kamyshin/kamyshin.js","kotel-nikovo":"./kotel-nikovo/kotel-nikovo.js","kotovo":"./kotovo/kotovo.js","leninsk":"./leninsk/leninsk.js","mikhaylovka":"./mikhaylovka/mikhaylovka.js","nikolayevsk":"./nikolayevsk/nikolayevsk.js","novoanninskiy":"./novoanninskiy/novoanninskiy.js","pallasovka":"./pallasovka/pallasovka.js","surovikino":"./surovikino/surovikino.js","uryupinsk":"./uryupinsk/uryupinsk.js","volgograd":"./volgograd/volgograd.js","volzhsky":"./volzhsky/volzhsky.js","yelan":"./yelan/yelan.js","zhirnovsk":"./zhirnovsk/zhirnovsk.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
