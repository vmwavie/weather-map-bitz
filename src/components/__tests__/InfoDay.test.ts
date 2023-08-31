import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import InfoDay from '../InfoDay.vue'

describe('InfoDay', () => {
  it('render the InfoDay component information correctly', () => {
    const humidity = 10;
    const pressure = 1000;
    const windSpeed = '50';

    const wrapper = mount(InfoDay, { 
      props: { 
        humidity,
        pressure,
        windSpeed,
      }
    })
    
    const humidityImg = wrapper.find('.day img[src="/src/assets/Icons/humidity.png"]');
    const pressureImg = wrapper.find('.day img[src="/src/assets/Icons/pressure.png"]');
    const windImg = wrapper.find('.day img[src="/src/assets/Icons/wind.png"]');
    
    const dayElements = wrapper.findAll('.day'); 
    
    expect(dayElements.length).toBe(3);
    
    const firstDayElement = dayElements[0];
    expect(firstDayElement.text()).toContain('Umidade');
    expect(firstDayElement.text()).toContain(`${humidity} %`);
    
    const secondDayElement = dayElements[1];
    expect(secondDayElement.text()).toContain('Pressão');
    expect(secondDayElement.text()).toContain(`${pressure} hPa`);
    
    const thirdDayElement = dayElements[2];
    expect(thirdDayElement.text()).toContain('Vento');
    expect(thirdDayElement.text()).toContain(`${windSpeed} km/hr`);
    
    expect(humidityImg.exists()).toBe(true);
    expect(pressureImg.exists()).toBe(true);
    expect(windImg.exists()).toBe(true);
  })
})
