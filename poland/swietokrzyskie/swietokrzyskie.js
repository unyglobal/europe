// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"swietokrzyskie","repository":"europe","path":"poland/swietokrzyskie","depth":2,"parent":"poland","children":["busko-zdroj","jedrzejow","kielce","konskie","ostrowiec-swietokrzyski","sandomierz","skarzysko-kamienna","starachowice","staszow"]});
export const childModules = Object.freeze({"busko-zdroj":"./busko-zdroj/busko-zdroj.js","jedrzejow":"./jedrzejow/jedrzejow.js","kielce":"./kielce/kielce.js","konskie":"./konskie/konskie.js","ostrowiec-swietokrzyski":"./ostrowiec-swietokrzyski/ostrowiec-swietokrzyski.js","sandomierz":"./sandomierz/sandomierz.js","skarzysko-kamienna":"./skarzysko-kamienna/skarzysko-kamienna.js","starachowice":"./starachowice/starachowice.js","staszow":"./staszow/staszow.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
