import { helper } from '@ember/component/helper';

// expects a dayjs object
export function formatDate(params/*, hash*/) {
  return params[0].format('MMM D');
}

export default helper(formatDate);
