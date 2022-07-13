import Usuario from "./Usuario";
import Publicacao from "./Publicacao";

(async () => {
  await Usuario.sync({ force: true });
  await Publicacao.sync({ force: true });
})()