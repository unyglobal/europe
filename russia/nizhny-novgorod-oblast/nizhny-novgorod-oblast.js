// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nizhny-novgorod-oblast","repository":"europe","path":"russia/nizhny-novgorod-oblast","depth":2,"parent":"russia","children":["arzamas","bogorodsk","bor","dzerzhinsk","gorodets","kstovo","kulebaki","lyskovo","nizhniy-novgorod","novaya-balakhna","pavlovo","sarov","semenov","sergach","shakhun-ya","vyksa","zavolzh-ye"]});
export const childModules = Object.freeze({"arzamas":"./arzamas/arzamas.js","bogorodsk":"./bogorodsk/bogorodsk.js","bor":"./bor/bor.js","dzerzhinsk":"./dzerzhinsk/dzerzhinsk.js","gorodets":"./gorodets/gorodets.js","kstovo":"./kstovo/kstovo.js","kulebaki":"./kulebaki/kulebaki.js","lyskovo":"./lyskovo/lyskovo.js","nizhniy-novgorod":"./nizhniy-novgorod/nizhniy-novgorod.js","novaya-balakhna":"./novaya-balakhna/novaya-balakhna.js","pavlovo":"./pavlovo/pavlovo.js","sarov":"./sarov/sarov.js","semenov":"./semenov/semenov.js","sergach":"./sergach/sergach.js","shakhun-ya":"./shakhun-ya/shakhun-ya.js","vyksa":"./vyksa/vyksa.js","zavolzh-ye":"./zavolzh-ye/zavolzh-ye.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
