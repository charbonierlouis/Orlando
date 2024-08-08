import { Attraction, Land, Rate, data } from "@/data";

export const findAttractionsByRate = (parcName: string, rate: Rate) => {
  const parc = data.parcs.find((parc) => parc.name === parcName);

  if (!parc) {
    return [];
  }

  const attractions = parc.lands.flatMap((land) => land.attractions || []);

  return attractions.filter((attraction) => attraction.rate === rate);
};

export const findAttractionByName = (attractionName: string) => {
  let findedAttraction: Attraction | undefined;
  data.parcs.forEach((parc) => {
    parc.lands.forEach((land) => {
      const attraction = land.attractions?.find(
        (attraction) => attraction.name === attractionName
      );
      if (attraction) {
        findedAttraction = attraction;
      }
    });
  });
  return findedAttraction;
};

export const findLandForAttraction = (attractionName: string) => {
  let findedLand: Land | undefined;
  data.parcs.forEach((parc) => {
    const landRes = parc.lands.find((land) => {
      const res = land.attractions?.find((attraction) => {
        return attraction.name === attractionName;
      });
      return !!res;
    });
    if (landRes) {
      findedLand = landRes;
    }
  });
  return findedLand;
};

export const findParcForAttraction = (attractionName: string) => {
  return data.parcs.find((parc) => {
    const land = parc.lands.find((land) => {
      return !!land.attractions?.find((attraction) => {
        return attraction.name === attractionName;
      });
    });
    return !!land;
  });
};

export const getTimeDifferenceBetweenTimes = (
  timeStringA: string,
  timeStringB: string
) => {
  const [hoursA, minutesA] = timeStringA.split(":").map(Number);
  const [hoursB, minutesB] = timeStringB.split(":").map(Number);

  const timeA = new Date();
  timeA.setHours(hoursA);
  timeA.setMinutes(minutesA);
  timeA.setSeconds(0);
  timeA.setMilliseconds(0);

  const timeB = new Date();
  timeB.setHours(hoursB);
  timeB.setMinutes(minutesB);
  timeB.setSeconds(0);
  timeB.setMilliseconds(0);

  const difference = timeA.getTime() - timeB.getTime();

  const diffInMinutes = Math.floor(difference / (1000 * 60));
  const diffInHours = Math.floor(diffInMinutes / 60);
  const remainingMinutes = diffInMinutes % 60;

  return {
    hours: diffInHours,
    minutes: remainingMinutes,
    totalMinutes: diffInMinutes,
    totalMilliseconds: difference,
  };
};

export const getTimeDifference = (timeString: string) => {
  const now = new Date();

  const [hours, minutes] = timeString.split(":").map(Number);

  const givenTime = new Date();
  givenTime.setHours(hours);
  givenTime.setMinutes(minutes);
  givenTime.setSeconds(0);
  givenTime.setMilliseconds(0);

  const difference = now.getTime() - givenTime.getTime();

  const diffInMinutes = Math.floor(difference / (1000 * 60));
  const diffInHours = Math.floor(diffInMinutes / 60);
  const remainingMinutes = diffInMinutes % 60;

  return {
    hours: diffInHours,
    minutes: remainingMinutes,
    totalMinutes: diffInMinutes,
    totalMilliseconds: difference,
  };
};

export const findLandByName = (landName: string) => {
  let findedLand: Land | undefined;
  data.parcs.forEach((parc) => {
    const land = parc.lands.find((land) => land.name === landName);
    if (land) {
      findedLand = land;
    }
  });
  return findedLand;
}
