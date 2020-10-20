import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: true,
})
export class AppHome {
  render() {
    return (
      <div class="app-home p-4">
        <p class="py-4">
          Welcome to the Stencil App Starter. You can use this starter to build entire apps all with web components using Stencil! Check out our docs on{' '}
          <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>

        <stencil-route-link url="/profile/stencil">
          <button class="py-2 px-4 text-white bg-blue-700 hover:bg-blue-600 focus:outline-none focus:bg-blue-500">Profile page</button>
        </stencil-route-link>
      </div>
    );
  }
}
