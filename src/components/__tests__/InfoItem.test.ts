import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import InfoItem from '../InfoItem.vue'

describe('InfoItem', () => {
  it('render the InfoItem component information correctly.', () => {
    const temperature = 50;
    const weather = 'Clima Nublado';
    const imageHref = '/src/assets/Icons/sun.png';

    const wrapper = mount(InfoItem, { 
      props: { 
        temperature,
        weather,
        imageHref,
      }
    })

    const iconImg = wrapper.find('.info-item img');
    const temperatureItem = wrapper.find('.temperature');
    const weatherItem = wrapper.find('.weather');

    expect(temperatureItem.text()).toContain(`${temperature}°`);
    expect(weatherItem.text()).toContain(`${weather}`);

    expect(iconImg.exists()).toBe(true);
    expect(iconImg.attributes('src')).toBe(imageHref);
  })
})
