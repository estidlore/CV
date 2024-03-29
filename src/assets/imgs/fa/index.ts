import addressBook from "./addressBook.png";
import award from "./award.png";
import briefcase from "./briefcase.png";
import chessPawn from "./chessPawn.png";
import code from "./code.png";
import externalLink from "./externalLink.png";
import graduationCap from "./graduationCap.png";
import language from "./language.png";
import star from "./star.png";
import user from "./user.png";

const faImgs = {
  addressBook,
  award,
  briefcase,
  chessPawn,
  code,
  externalLink,
  graduationCap,
  language,
  star,
  user,
};

type FaImage = keyof typeof faImgs;

export type { FaImage };
export { faImgs };
