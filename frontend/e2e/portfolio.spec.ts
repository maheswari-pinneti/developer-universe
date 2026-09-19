import { test, expect } from '@playwright/test';

test.describe('MAHESWARI DEVELOPER UNIVERSE E2E TESTS', () => {
  test('should load landing hero section with name and title', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('MAHESWARI');
    await expect(page.locator('body')).toContainText('FRONTEND DEVELOPER');
  });

  test('should navigate to projects section and display STACKLY', async ({ page }) => {
    await page.goto('/');
    const projectSection = page.locator('#projects');
    await projectSection.scrollIntoViewIfNeeded();
    await expect(projectSection).toContainText('STACKLY');
  });

  test('should open Command Center with CTRL+K shortcut', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Control+k');
    await expect(page.getByPlaceholder('Type a command or search section')).toBeVisible();
  });

  test('should open Resume Modal when clicking RESUME button', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /RESUME/i }).first().click();
    await expect(page.getByText('MAHESWARI PINNETI // RESUME SPECIFICATION')).toBeVisible();
  });
});
