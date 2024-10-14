import assert from "assert";

Feature('action');

Scenario('test something',  ({ I }) => {
  I.amOnPage('/');
  I.dontSeeElement('.todo-count');
  I.fillField('What needs to be done?', 'Write a guide');
  I.pressKey('Enter');
  I.see('Write a guide', '.todo-list');
  I.see('1 item left', '.todo-count');
});

Scenario('get value of current tasks', async ({ I }) => {
  I.amOnPage('/');
  I.fillField('#todo-input', 'my first item');
  I.pressKey('Enter')
  I.fillField('#todo-input', 'my second item');
  I.pressKey('Enter')
  const text = await I.grabTextFrom('.todo-count');
  assert.equal('2 items left!', text);
});
