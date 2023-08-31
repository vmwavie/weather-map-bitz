import { ImageEnums } from "./ImageEnums";

async function getImageType(typeCode: number) {
  let type = '';

  switch (true) {
    case typeCode >= 200 && typeCode < 300:
      type = 'thunder';
      break;
    case typeCode >= 300 && typeCode <= 501:
      type = 'lightRain';
      break;
    case typeCode >= 502 && typeCode < 600:
      type = 'heavyRain';
      break;
    case typeCode >= 600 && typeCode <= 620:
      type = 'lightSnow';
      break;
    case typeCode > 620 && typeCode < 700:
      type = 'snow';
      break;
    case typeCode > 700 && typeCode < 770:
      type = 'mist';
      break;
    case typeCode === 771:
      type = 'squall';
      break;
    case typeCode === 781:
      type = 'tornado';
      break;
    case typeCode === 800:
      type = 'clear';
      break;
    case typeCode > 800 && typeCode < 810:
      type = 'cloudy';
      break;
    default:
      type = 'error';
  }

  return type;
}

async function fetchImageIcon(typeCode: number) {
  const hours = new Date().getHours()
  const isDayTime = hours > 6 && hours < 20;
  
  const imageType = await getImageType(typeCode);
  let imageSource: string = '';
  const imageEnumItem = ImageEnums[imageType];
  if (!imageEnumItem) return;
  imageSource = isDayTime ? imageEnumItem.image.day : imageEnumItem.image.night;
  return imageSource;
}

export { fetchImageIcon };

