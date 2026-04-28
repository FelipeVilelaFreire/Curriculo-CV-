import type { StaticImageData } from "next/image";
import uffLogo from "./uff.png";
import saoBentoLogo from "./saobento.png";
import santoInacioLogo from "./santo_inacio.svg";
import sonhodospesLogo from "./sonhodospes.svg";
import jovensdapazLogo from "./jovensdapaz.png";

export const logos: Record<string, StaticImageData | string | null> = {
  uff:          uffLogo,
  escola:       saoBentoLogo,
  prognum:      "/logos/prognum.webp",
  santo_inacio: santoInacioLogo,
  sonhodospes:  sonhodospesLogo,
  jovensdapaz:  jovensdapazLogo,
};
