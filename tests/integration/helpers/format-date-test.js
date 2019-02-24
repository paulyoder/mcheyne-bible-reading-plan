import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import dayjs from 'dayjs';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | format-date', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function(assert) {
    let today = dayjs();
    this.set('inputValue', today);

    await render(hbs`{{format-date inputValue}}`);

    assert.equal(this.element.textContent.trim(), today.format('MMM D'));
  });
});
