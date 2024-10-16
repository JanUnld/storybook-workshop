# Storybook Workshop

> [!NOTE] 
> This workspace was generated with [Nx](./NX.md).

This repository contains code for a [Storybook][sb] workshop. The workshop is designed to help you get started with Storybook and learn how to use it to isolate, develop and document your components, based on the [atomic design principles by Brad Frost][ad] and [Angular][ng].

  [sb]: https://storybook.js.org/
  [ad]: https://bradfrost.com/blog/post/atomic-web-design/
  [ng]: https://angular.dev/

## Getting Started

> [!IMPORTANT]
> Checkout this repository _or create your own using [Nx][nx]_. 
>
> Don't forget to install the dependencies!
> 
> ```bash
> npm install
> ```

  [nx]: https://nx.dev/

To simplify the understanding of the domains and components within this repository, the code is divided into multiple projects. Each project contains a set of components that are related to each other and refers to a different use-case example.

### Structure

> [!NOTE]
> The following structure is just a template you can use to get started. Feel free to create your own workspace. _For instance, you could also just create one single application project, so you don't need to run multiple Storybooks_.

#### Apps

- `ui` <br> The main application which is the integration target for our _isolated_ components

#### Libs

- `ui-components` <br>
  Contains more comprehensive building blocks, that are used in the `ui` application (aka. smart components, e.g. templates, pages, layouts). We **do** want to encapsulate some of our business logic in here!

- `design-system` <br> 
  Contains the most basic building blocks for our `ui` (aka. dumb components, e.g. atoms, molecules, organisms). We **do not** want any business logic in here!

## Tasks

> [!NOTE]
> The steps and example components below are just a suggestion. You **do not** need to implement the exact same components or follow the same steps. Feel free to experiment and create your own components!

### Steps

1. Setup [Storybook][sb]
2. Creating an atom (e.g. `link`)
3. Creating a molecule (e.g. `breadcrumbs`)
4. Creating an organism (e.g. `header`)
5. Creating a template (e.g. `landing page`)
6. Creating a page (e.g. `home`)
7. Integrating it into the app

### Branching

Each step of the workshop is represented by a branch in this repository. You can follow along the changes by checking out the respective branch for a step or comparing it to the previous one.

## Scripts

### Running Storybook

```bash
nx run <project>:storybook
```

Where `<project>` is one of the following:

- `ui`
- `ui-components`
- `design-system`

#### Quickstart Recipies

```bash
nx run design-system:storybook
```

```bash
nx run ui-components:storybook
```

```bash
nx run ui:storybook
```

### Running the UI

```bash
nx serve ui
```

## Links and Resources

- [Atomic Design by Brad Frost][ad]
- [Nx][nx-intro]
  - [Nx Angular Plugin API][nx-ng]
  - [Nx Storybook Plugin][nx-sb]
- [Angular][ng]
  - [Angular CLI][ng-cli] 
- [Storybook][sb]
  - [Storybook for Angular][sb-ng]
  - [Storybook Addons][sb-addons]
    - [Storybook Addon Designs][sb-addon-designs]

  [nx-intro]: https://nx.dev/getting-started/intro
  [nx-ng]: https://nx.dev/nx-api/angular
  [nx-sb]: https://nx.dev/nx-api/storybook
  [ng-cli]: https://angular.dev/tools/cli/setup-local
  [sb-ng]: https://storybook.js.org/docs/get-started/frameworks/angular?renderer=angular
  [sb-addons]: https://storybook.js.org/addons/
  [sb-addon-designs]: https://storybook.js.org/addons/@storybook/addon-designs
