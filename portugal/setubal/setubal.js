// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"setubal","repository":"europe","path":"portugal/setubal","depth":2,"parent":"portugal","children":["almada","amora","arrentela","azeitao","barreiro","caparica","charneca-de-caparica","corroios","lavradio","moita","montijo","palmela","piedade","pinhal-novo","quinta-do-conde","sesimbra"]});
export const childModules = Object.freeze({"almada":"./almada/almada.js","amora":"./amora/amora.js","arrentela":"./arrentela/arrentela.js","azeitao":"./azeitao/azeitao.js","barreiro":"./barreiro/barreiro.js","caparica":"./caparica/caparica.js","charneca-de-caparica":"./charneca-de-caparica/charneca-de-caparica.js","corroios":"./corroios/corroios.js","lavradio":"./lavradio/lavradio.js","moita":"./moita/moita.js","montijo":"./montijo/montijo.js","palmela":"./palmela/palmela.js","piedade":"./piedade/piedade.js","pinhal-novo":"./pinhal-novo/pinhal-novo.js","quinta-do-conde":"./quinta-do-conde/quinta-do-conde.js","sesimbra":"./sesimbra/sesimbra.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
