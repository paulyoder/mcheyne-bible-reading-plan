import Route from '@ember/routing/route';
import { plan } from './../lib/plan';
import dayjs from 'dayjs';

export default Route.extend({
  model() {
    let today = dayjs();
    let monthNumber = +today.format('M');
    let dayOfMonth = +today.format('D');
    return {
      today: today,
      verses: plan[monthNumber][dayOfMonth]
    };
  }
});
