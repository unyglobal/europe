// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"irun","repository":"europe","path":"spain/basque-country/irun","depth":3,"parent":"spain/basque-country","children":["antzaran","arbes","artaleku","beraun","dunboa","lapitze","larreaundi","maintzia","mendibil","osinbiribil","santiago","urantzu"]});
export const childModules = Object.freeze({"antzaran":"./antzaran/antzaran.js","arbes":"./arbes/arbes.js","artaleku":"./artaleku/artaleku.js","beraun":"./beraun/beraun.js","dunboa":"./dunboa/dunboa.js","lapitze":"./lapitze/lapitze.js","larreaundi":"./larreaundi/larreaundi.js","maintzia":"./maintzia/maintzia.js","mendibil":"./mendibil/mendibil.js","osinbiribil":"./osinbiribil/osinbiribil.js","santiago":"./santiago/santiago.js","urantzu":"./urantzu/urantzu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
