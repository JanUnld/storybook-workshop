# Storybook Workshop

> [!NOTE] 
> This workspace was generated with [Nx](./NX.md).

This repository contains code for a [Storybook][sb] workshop. The workshop is designed to help you get started with Storybook and learn how to use it to isolate, develop and document your components, based on the [atomic design principles by Brad Frost][ad] and [Angular][ng].

  [sb]: https://storybook.js.org/
  [ad]: https://bradfrost.com/blog/post/atomic-web-design/
  [ng]: https://angular.dev/

## Getting Started

> [!IMPORTANT]
> Checkout this repository _or create your own using [Nx][nx]_

  [nx]: https://nx.dev/

To simplify the understanding of the domains and components within this repository, the code is divided into multiple projects. Each project contains a set of components that are related to each other and refers to a different use-case example.

### Structure

#### Apps

- `ui` <br> The main application which is the integration target for our _isolated_ components

#### Libs

- `ui-components` <br>
  Contains more comprehensive building blocks, that are used in the `ui` application (aka. smart components, e.g. templates, pages, layouts). We **do** want to encapsulate some of our business logic in here!

- `design-system` <br> 
  Contains the most basic building blocks for our `ui` (aka. dumb components, e.g. atoms, molecules, organisms). We **do not** want any business logic in here!

### Steps

1. Setup Storybook
2. Creating an atom (link)
3. Creating a molecule (breadcrumb)
4. Creating an organism (header)
5. Creating a template (landing page)
6. Creating a page (home)
7. Integrating it into the app

#### Branching

Each step of the workshop is represented by a branch in this repository. You can follow along the changes by checking out the respective branch for a step or comparing it to the previous one.
