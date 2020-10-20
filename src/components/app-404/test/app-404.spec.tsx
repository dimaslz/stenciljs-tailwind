import { newSpecPage } from '@stencil/core/testing';
import { App404 } from '../app-404';

describe('app-404', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [App404],
      html: `<app-404></app-404>`,
    });
    expect(page.root).toEqualHtml(`
      <app-404>
        <mock:shadow-root>
          <div class="block text-center">
            <h1>
              404 - Page not found
            </h1>
            <div class="mt-12">
              <stencil-route-link class="hover:text-blue-600 text-blue-700" url="/">
                back to home
              </stencil-route-link>
            </div>
          </div>
        </mock:shadow-root>
      </app-404>
    `);
  });
});
