import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-404',
  styleUrl: 'app-404.scss',
  shadow: true,
})
export class App404 {
  render() {
    return (
      <div class="block text-center">
        <h1>404 - Page not found</h1>
        <div class="mt-12">
          <stencil-route-link url="/" class="text-blue-700 hover:text-blue-600">
            back to home
          </stencil-route-link>
        </div>
      </div>
    );
  }
}
