interface ImageEnumItem {
  image: {
    night: string;
    day: string;
  };
}

interface ImageEnumType {
  [key: string]: ImageEnumItem;
}

const ImageEnums: ImageEnumType = {
  clear: {
    image: {
      night: 'sun.png',
      day: 'night.png',
    },
  },
  partlyCloudy: {
    image: {
      night: 'partly-cloud-night.png',
      day: 'partly-cloudy-day.png',
    },
  },
  cloudy: {
    image: {
      night: 'cloudy-night.png',
      day: 'cloudy-day.png',
    },
  },
  lightRain: {
    image: {
      night: 'light-rain-day.png',
      day: 'light-rain-day.png',
    },
  },
  heavyRain: {
    image: {
      night: 'heavy-rain-night.png',
      day: 'heavy-rain-day.png',
    },
  },
  thunder: {
    image: {
      night: 'thunder.png',
      day: 'thunder.png',
    },
  },
  mist: {
    image: {
      night: 'fog-night.png',
      day: 'fog-day.png',
    },
  },
  squall: {
    image: {
      night: 'squall.png',
      day: 'squall.png',
    },
  },
  tornado: {
    image: {
      night: 'tornado.png',
      day: 'tornado.png',
    },
  },
  lightSnow: {
    image: {
      night: 'snow-cloud.png',
      day: 'snow-cloud.png',
    },
  },
  snow: {
    image: {
      night: 'ice-pallets.png',
      day: 'ice-pallets.png',
    },
  },
};

export { ImageEnums };

