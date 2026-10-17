// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"irkutsk-oblast","repository":"europe","path":"russia/irkutsk-oblast","depth":2,"parent":"russia","children":["angarsk","baykal-sk","bodaybo","bratsk","cheremkhovo","chunskiy","irkutsk","markova","nizhneudinsk","sayansk","shelekhov","slyudyanka","tayshet","tulun","usol-ye-sibirskoye","ust-ilimsk","ust-kut","vikhorevka","zheleznogorsk-ilimskiy","zima"]});
export const childModules = Object.freeze({"angarsk":"./angarsk/angarsk.js","baykal-sk":"./baykal-sk/baykal-sk.js","bodaybo":"./bodaybo/bodaybo.js","bratsk":"./bratsk/bratsk.js","cheremkhovo":"./cheremkhovo/cheremkhovo.js","chunskiy":"./chunskiy/chunskiy.js","irkutsk":"./irkutsk/irkutsk.js","markova":"./markova/markova.js","nizhneudinsk":"./nizhneudinsk/nizhneudinsk.js","sayansk":"./sayansk/sayansk.js","shelekhov":"./shelekhov/shelekhov.js","slyudyanka":"./slyudyanka/slyudyanka.js","tayshet":"./tayshet/tayshet.js","tulun":"./tulun/tulun.js","usol-ye-sibirskoye":"./usol-ye-sibirskoye/usol-ye-sibirskoye.js","ust-ilimsk":"./ust-ilimsk/ust-ilimsk.js","ust-kut":"./ust-kut/ust-kut.js","vikhorevka":"./vikhorevka/vikhorevka.js","zheleznogorsk-ilimskiy":"./zheleznogorsk-ilimskiy/zheleznogorsk-ilimskiy.js","zima":"./zima/zima.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
