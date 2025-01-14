# Silvershade SCSS Framework

Silvershade is a lightweight and modular SCSS framework designed to help developers create responsive, mobile-first layouts using CSS Grid and a clean utility-based architecture. It avoids negative margins, ensuring maintainable and predictable spacing.

---

## Features

- **Grid System**: A customizable grid powered by `display: grid` for flexible layouts.
- **Spacing Utilities**: Consistent and predictable spacing with variables and mixins.
- **Mobile-First Design**: Optimized for small screens first, with progressive enhancements.
- **No Negative Margins**: Prioritizes clean spacing patterns for easier maintenance.
- **Customizable**: Tailor variables, mixins, and utility classes to suit your project.
- **Modular Architecture**: Import only the parts of the framework you need.

---

## Installation and Import

### Prerequisites

Before using Silvershade, ensure you have the following installed:
- **Node.js**: [Install Node.js]
- **Yarn**: [Install Yarn]

### Adding Silvershade to Your Project

1. Add Silvershade as a dependency using Yarn:
```bash
  yarn add @zairakai/silvershade
```

2. Import Silvershade into your SCSS files:
   ```bash
   @use '@zairakai/silvershade/src' as Silvershade;

   .example {
     padding: Silvershade.get-spacing('md');
     @include Silvershade.grid-container;
   }
   ```

---

## Usage Examples

### Grid Example

```bash

@use '@zairakai/silvershade/src' as Silvershade;

.container {
  @include Silvershade.grid-container;

  .item {
    @include Silvershade.grid-item(2);
  }
}
```

### Spacing Example

```bash

@use '@zairakai/silvershade/src' as Silvershade;

.card {
  padding: Silvershade.get-spacing('lg');
}
```

---

## Contribution Guide

### Getting Started

To contribute to Silvershade, follow these steps:

1. Clone the repository:
   ```
   git clone https://gitlab.com/zairakai/npm/silvershade.git
   cd silvershade
   ```

2. Install dependencies:
   ```
   yarn install
   ```

### File Structure

The project is structured as follows:
```
silvershade/
├── src/
│   ├── _index.scss         # Main entry point for the framework
│   ├── _variables.scss     # Customizable SCSS variables
│   ├── _mixins.scss        # Core mixins for spacing, grid, etc.
│   ├── _grid.scss          # SCSS for the grid system
│   ├── _spacing.scss       # SCSS for spacing utilities
├── package.json            # Metadata and scripts for the package
└── README.md               # Project documentation
```

### Adding New Features

1. Add or modify SCSS files in the `src` folder.
2. Test your changes locally by importing the updated files in a test SCSS project.
3. Update this `README.md` to include new usage examples.
4. Commit your changes:
   ```
   git checkout -b feature/new-feature
   git add .
   git commit -m "Add new feature: <description>"
   git push origin feature/new-feature
   ```

5. Open a merge request on GitLab for review.

---

## Publishing a New Version

Follow these steps to publish a new version of Silvershade to the GitLab Package Registry.

### Step 1: Configure `.npmrc`

Create a `.npmrc` file in the root of your project with the following content:

```
@zairakai:registry=https://gitlab.com/api/v4/projects/<project-id>/packages/npm/
//gitlab.com/api/v4/projects/<project-id>/packages/npm/:_authToken=<your-personal-access-token>
```

- Replace `<project-id>` with your GitLab project ID (visible in **Settings > General**).
- Replace `<your-personal-access-token>` with your GitLab Personal Access Token.  
  Generate a token in **Settings > Access Tokens** with the `read_api` and `write_registry` scopes.

### Step 2: Bump the Version

Before publishing, update the version in `package.json`. Use the following command to follow semantic versioning:
```
yarn version --new-version <major|minor|patch>
```

### Step 3: Publish the Package

Run the following command to publish the package:
```
yarn publish
```

The package will now be available in the GitLab Package Registry.

---

## Importing the Published Package

To use Silvershade in another project:

1. Add the package as a dependency:
   ```
   yarn add @zairakai/silvershade
   ```


[Install Node.js]: https://nodejs.org/
[Install Yarn]: https://yarnpkg.com/
