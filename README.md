# Take home assignement
## How to run
Install pnpm and nx if you don't have it already
```
npm i -g pnpm nx
```

Install dependencies
```
pnpm install
```

Run
```
pnpm start
```

Test
```
pnpm test
```

Build
```
pnpm build
```

## About the technical choices
### PNPM
- [JavaScript package managers compared: Yarn, npm, or pnpm](https://blog.logrocket.com/javascript-package-managers-compared/)
- [pnpm: Motivation](https://pnpm.io/motivation)

#### tl;dr;
- Faster, speacially on a big project
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
**YES**, definitly.  
When I need to do any project for an interview I'll either go completly on my confort zone or I'll take the opotunity to learn a technology that I was keeping an eye on for some time. In this case I decided for the second.