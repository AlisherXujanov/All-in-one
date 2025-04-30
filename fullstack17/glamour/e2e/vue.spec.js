import { test, expect } from '@playwright/test'

// See here how to get started:
// https://playwright.dev/docs/intro
test.describe('Glamour Website Tests', () => {

  // перед тем как начать тест, мы можем запускать что-то
  test.beforeEach(async ({ page }) => {
    // Go to the homepage
    await page.goto('http://localhost:5173/')
    // Wait for the page to be fully loaded
    await page.waitForLoadState('domcontentloaded')
  })

  // после каждого теста
  // test.afterEach(async ({page}) => {})

  // page    == document
  // locator == querySelector

  test('should display the main heading', async ({ page }) => {
    // Wait for the heading to be visible
    const h1 = page.locator('h1.heading').first()
    await h1.waitFor({ state: 'visible' })

    // Check if the heading text is correct
    await expect(h1).toHaveText(/Product Details/)
    // "..."   ->  String
    // /.../   ->  RegEx
  })

  test('should have working navigation', async ({ page }) => {
    // Check if navigation links are present
    const navLinks = page.locator('nav a')
    await expect(navLinks).toHaveCount(await navLinks.count())

    // Check if links are clickable
    for (const link of await navLinks.all()) {
      await expect(link).toBeVisible()
      await expect(link).toBeEnabled()
    }
  })
})



