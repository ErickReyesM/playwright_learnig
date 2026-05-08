import { type Page } from "@playwright/test";

async function createDefaultTodos(page: Page, TODO_ITEMS: string[]) {
  // create a new todo locator
  const newTodo = page.getByPlaceholder('What needs to be done?');

  for (const item of TODO_ITEMS) {
    await newTodo.fill(item);
    await newTodo.press('Enter');
  }
}

export { createDefaultTodos };