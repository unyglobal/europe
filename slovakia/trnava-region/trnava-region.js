// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"trnava-region","repository":"europe","path":"slovakia/trnava-region","depth":2,"parent":"slovakia","children":["dunajska-streda","galanta","hlohovec","piestany","senica","sered","skalica","trnava"]});
export const childModules = Object.freeze({"dunajska-streda":"./dunajska-streda/dunajska-streda.js","galanta":"./galanta/galanta.js","hlohovec":"./hlohovec/hlohovec.js","piestany":"./piestany/piestany.js","senica":"./senica/senica.js","sered":"./sered/sered.js","skalica":"./skalica/skalica.js","trnava":"./trnava/trnava.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
