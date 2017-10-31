import Route from '@ember/routing/route';
import { plan } from './../lib/plan';

export default Route.extend({
  model() {
    let date = moment();
    let monthNumber = +date.format('M');
    let dayOfMonth = +date.format('D');
    return {
      date: date,
      dayPlan: plan[monthNumber][dayOfMonth]
    }
  }
});
