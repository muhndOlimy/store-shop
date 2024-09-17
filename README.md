# Convertedin

## Overview
This e-commerce platform allows users to browse, search, filter, providing a convenient shopping experience.

## Up & Going
This e-commerce platform allows users to browse, search, filter, providing a convenient shopping experience.

#### install node modules
```
npm i
```
#### run the app in dev mode
```
ng s
```

## File & structure
Pages: Contains all component that get routed (views) and have postfix .page.ts to extingush them from buildup components

Components:contains all build components for the pages components & have common named folder which contains components that used in multiple views.

Store: Contains all reducers, actions, effects and selectors categorized in folders depending on entites.

Interfaces: Contains all interfaces for the app

Services: Contains all fetching services for the app

Store folder contains the actions reducers effects and selectors depedning on entities.

Other folder like services, interfaces, etc contains files of same type divied also upon features.

```
├── app
│   ├── app.component.html
│   ├── app.component.scss
│   ├── app.component.ts
│   ├── app.config.ts
│   ├── app.routes.ts
│   ├── components
│   │   ├── cart
│   │   │   └── cart-list
│   │   │       ├── cart-list.component.html
│   │   │       ├── cart-list.component.scss
│   │   │       └── cart-list.component.ts
│   │   ├── common
│   │   │   ├── breadcrumb
│   │   │   │   ├── breadcrumb.component.html
│   │   │   │   ├── breadcrumb.component.scss
│   │   │   │   └── breadcrumb.component.ts
│   │   │   ├── header
│   │   │   │   ├── header.component..html
│   │   │   │   ├── header.component.scss
│   │   │   │   └── header.component.ts
│   │   │   └── navbar
│   │   │       ├── navbar.component.html
│   │   │       ├── navbar.component.scss
│   │   │       └── navbar.component.ts
│   │   └── product-list
│   │       ├── filter-menu
│   │       │   ├── filter-menu.component.html
│   │       │   ├── filter-menu.component.scss
│   │       │   └── filter-menu.component.ts
│   │       ├── product-card
│   │       │   ├── product-card.component.html
│   │       │   ├── product-card.component.scss
│   │       │   └── product-card.component.ts
│   │       └── product-list
│   │           ├── product-list.component.html
│   │           ├── product-list.component.scss
│   │           └── product-list.component.ts
│   ├── interfaces
│   │   ├── app-store.ts
│   │   └── products.interfaces.ts
│   ├── pages
│   │   ├── product-details.page
│   │   │   ├── product-details.page.component.html
│   │   │   ├── product-details.page.component.scss
│   │   │   └── product-details.page.component.ts
│   │   └── product-list.page
│   │       ├── product-list.page.component.html
│   │       ├── product-list.page.component.scss
│   │       └── product-list.page.component.ts
│   ├── services
│   │   └── products.fetching.service.ts
│   └── store
│       ├── cart
│       │   ├── cart.actions.ts
│       │   ├── cart.reducers.ts
│       │   └── cart.selectors.ts
│       └── products
│           ├── products.actions.ts
│           ├── products.effects.ts
│           ├── products.reducers.ts
│           └── products.selectors.ts
├── index.html
├── main.ts
└── styles.scss
```


# Management state
I'm using NgRx for fetching, handling, storing & cahcing the app data.

using effects to fetch products and caching each page of products list for a period of 15 min.

But skipping caching while search to make sure the user get the latest data when he is searching.

# Styling
regarding the style I choose to go with primeNg framework as it saved time with it UI components and also used bootstrap grid system to achive basic responsive view in no time.

Please note the bootstrap grid and primeNg is't making any conflict as primeNg docs stated.

# Not delivered parts
Sadly due the time window I had, some feature hasn't been done like filter and the functionaly of breadcrumb therefore there are present as UI only

Aslo the adding products to cart isn't handled to calculate quantites of every product on add and removing.

# What could be better
1- PIM Structure:
It would be nice if I go with PIM structure in class but since the narrow time window and the project being basic and addition to that I'm using nesting in SCSS I didn't go with PIM approach.

2- Cart Functionalty: Adding and removing effecting products count and total price for each product and total price for the whole cart

3- Filter Functionalty: Adding at least categories, price-range and rating would be nice since the productAPI provide thier data.

4- Breadcrumb Hairarchy: Adding logic to breadcrum component to be able view the current view navigation hairarchy.

5- Images optimzation: Optimizating images by ngSRC and handling the explicit width & height attributes for every image and add a placeholder untill the reload.