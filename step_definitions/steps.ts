const { I } = inject();
// Add in your custom step files

Given('I am on the home page', () => {
  // From "features/add-task.feature" {"line":6,"column":5}
  I.amOnPage('/');
});

When('I type the name of the task', () => {
  // From "features/add-task.feature" {"line":7,"column":5}
  I.fillField('#todo-input', 'my first item');
});

When('Click Enter', () => {
  // From "features/add-task.feature" {"line":8,"column":5}
  I.pressKey('Enter')
});

Then('The task will be show in the todo list', () => {
  // From "features/add-task.feature" {"line":9,"column":5}
  I.see('my first item', 'li');
});

When('I click the delete button icon', () => {
  // From "features/remove-task.feature" {"line":7,"column":5}
  throw new Error('Not implemented yet');
});

Then('The task will be remove in the todo list', () => {
  // From "features/remove-task.feature" {"line":8,"column":5}
  throw new Error('Not implemented yet');
});
