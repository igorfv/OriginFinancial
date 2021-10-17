# Take home assignment
## How to run
Install pnpm and nx if you don't have it already with `npm i -g pnpm nx`

Install dependencies with `pnpm install`

Run the main app with `pnpm start` or a target app with `pnpm start <target-name>`

Test the affected files with `pnpm test` or everything with `pnpm run test-ci`

Run the E2E test with `pnpm e2e`

Lint runs every time you commit but you can run it manually to check the affected files with `pnpm lint` or everything with `pnpm run lint-ci`

Build with `pnpm build`

## About the technical choices
### PNPM
- [JavaScript package managers compared: Yarn, npm, or pnpm](https://blog.logrocket.com/javascript-package-managers-compared/)
- [pnpm: Motivation](https://pnpm.io/motivation)

#### tl;dr;
- Faster, specially on a big project
- More secure
- Can handle multiple versions of the same package without overhead
- Works greatly with monorepos

### NX
- [NX](https://nx.dev/)
- [From Lerna/Yarn to Nx: Faster Build Times and Better Dev Ergonomics](https://blog.nrwl.io/lerna-yarn-nx-faster-build-times-better-dev-ergonomics-2ec28463d3a5)

#### tl;dr;
- Technology agnostic, works with any framework and the dev experience is the same for any choice.
- Powerful/customizable code generator.
- Test and Build only the affected structure.
- Abstract most of the pain of maintaining a monorepo.
- Distributed tasks execution with cache
- Ownership management

#### Is NX an overkill for such a small project?
**YES**, definitely.  
When I need to do any project for an interview I'll either go completely on my conform zone or I'll take the opportunity to learn a technology that I was keeping an eye on for some time. In this case I decided for the second.

## Limitations
It was only tested on Chrome 94.0.4606.81

## Tech debts
- CSS: Hardcoded sizes (media query, fonts, etc colors, ect. - Create a basic UI lib for common styling
- Libs folder been used as components instead of grouping by type. As the project grow it's a good idea to create some groups so this folder does not get overwhelmingly big.
  - Group header, footer, main container under Layout.
  - Group titles and other typography components under Typography
- Deduplicate the svgr mock
- Setup unassert for production build
- Improve the eslint rules and update the generator to reflect it
