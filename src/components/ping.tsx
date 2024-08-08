import { Attraction, Rate } from "@/data";

interface Props {
  attraction: Attraction;
}

export const Ping = ({ attraction }: Props) => {
  switch (attraction.rate) {
    case Rate.A_FAIRE_ABSOLUMENT:
      return (
        <div className="w-5 h-5 rounded-full bg-red-300 border border-red-500" />
      );

    case Rate.A_FAIRE:
      return (
        <div className="w-5 h-5 rounded-full bg-orange-300 border border-orange-500" />
      );

    case Rate.SI_POSSIBLE:
      return (
        <div className="w-5 h-5 rounded-full bg-green-300 border border-green-500" />
      );

    case Rate.PAS_BESOIN:
      return (
        <div className="w-5 h-5 rounded-full bg-blue-300 border border-blue-500" />
      );

    default:
      return (
        <div className="w-5 h-5 rounded-full bg-gray-300 border border-gray-500" />
      );
  }
};
