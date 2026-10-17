// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lesser-poland","repository":"europe","path":"poland/lesser-poland","depth":2,"parent":"poland","children":["andrychow","bienczyce","bochnia","brzesko","chrzanow","gorlice","grzegorzki","kety","krakow","libiaz","myslenice","nowy-sacz","nowy-targ","olkusz","oswiecim","skawina","tarnow","trzebinia","wadowice","wieliczka","zakopane"]});
export const childModules = Object.freeze({"andrychow":"./andrychow/andrychow.js","bienczyce":"./bienczyce/bienczyce.js","bochnia":"./bochnia/bochnia.js","brzesko":"./brzesko/brzesko.js","chrzanow":"./chrzanow/chrzanow.js","gorlice":"./gorlice/gorlice.js","grzegorzki":"./grzegorzki/grzegorzki.js","kety":"./kety/kety.js","krakow":"./krakow/krakow.js","libiaz":"./libiaz/libiaz.js","myslenice":"./myslenice/myslenice.js","nowy-sacz":"./nowy-sacz/nowy-sacz.js","nowy-targ":"./nowy-targ/nowy-targ.js","olkusz":"./olkusz/olkusz.js","oswiecim":"./oswiecim/oswiecim.js","skawina":"./skawina/skawina.js","tarnow":"./tarnow/tarnow.js","trzebinia":"./trzebinia/trzebinia.js","wadowice":"./wadowice/wadowice.js","wieliczka":"./wieliczka/wieliczka.js","zakopane":"./zakopane/zakopane.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
