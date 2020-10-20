import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div class="h-full">
        <header class="bg-blue-700 text-white shadow-sm inline-block w-full">
          <stencil-route-link url="/">
            <h1 class="px-4 text-lg">Stencil App Starter + TailwindCSS</h1>
          </stencil-route-link>
        </header>

        <main class="h-full">
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/profile/:name" component="app-profile" />
              <stencil-route component="app-404" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
