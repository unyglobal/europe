// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"novosibirsk-oblast","repository":"europe","path":"russia/novosibirsk-oblast","depth":2,"parent":"russia","children":["akademgorodok","barabinsk","berdsk","bolotnoye","cherepanovo","iskitim","karasuk","kochenevo","krasnoobsk","kupino","kuybyshev","linevo","novosibirsk","ob","suzun","tatarsk","toguchin"]});
export const childModules = Object.freeze({"akademgorodok":"./akademgorodok/akademgorodok.js","barabinsk":"./barabinsk/barabinsk.js","berdsk":"./berdsk/berdsk.js","bolotnoye":"./bolotnoye/bolotnoye.js","cherepanovo":"./cherepanovo/cherepanovo.js","iskitim":"./iskitim/iskitim.js","karasuk":"./karasuk/karasuk.js","kochenevo":"./kochenevo/kochenevo.js","krasnoobsk":"./krasnoobsk/krasnoobsk.js","kupino":"./kupino/kupino.js","kuybyshev":"./kuybyshev/kuybyshev.js","linevo":"./linevo/linevo.js","novosibirsk":"./novosibirsk/novosibirsk.js","ob":"./ob/ob.js","suzun":"./suzun/suzun.js","tatarsk":"./tatarsk/tatarsk.js","toguchin":"./toguchin/toguchin.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
