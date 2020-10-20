import { newE2EPage } from '@stencil/core/testing';

describe('app-404', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-404></app-404>');

    const element = await page.find('app-404');
    expect(element).toHaveClass('hydrated');
  });
});
