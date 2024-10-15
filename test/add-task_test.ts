import assert from "assert";

Feature('add the todo task');

Scenario('Add the task successful', async ({ I }) => {

  Given('I am on the home page', () =>{});

  I.amOnPage('/');
  I.fillField('#todo-input', 'my first item');
  I.pressKey('Enter')
  I.fillField('#todo-input', 'my second item');
  I.pressKey('Enter')
  const text = await I.grabTextFrom('.todo-count');
  assert.equal('2 items left!', text);
});
