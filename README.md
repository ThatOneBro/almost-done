# AlmostDone
Take your projects from AlmostDone🚧 to Done✅

## Purpose
This app is designed to serve a few purposes:
1. Be a good app to learn about modern TypeScript stacks using best practices with Next.js, the AppRouter, and React Server Components. I can't promise my own intuitions are always right but that's what PRs are for.
2. Be an actually good to-do list app that will help keep you on rails and won't allow you to get overwhelmed by how much is on your list.
3. Be a white-label open-source project that you can self-host for yourself and/or (eventually) your team.

## Proposed Methodology
TODO: Write about current ideas for how the to-do system should be structured in order to be effective, especially for those who are easily overwhelmed by cluttered to-do lists.

## Development
### Getting started
It's recommended that you use `pnpm` at this time for this project. Although we may switch to `bun` soon for the package manager and task runner.

```bash
# 1. Clone this repo and cd into it
git clone git@github.com/ThatOneBro/almost-done.git && cd almost-done

# 2. Install deps. It's recommended to use `pnpm` for now but we may switch to `bun` soon. 
npm install -g pnpm@latest # In case you don't have pnpm installed yet
pnpm install

# 3. Create and run database migrations
pnpm migrate:init # this runs `pnpm migrate:create` and `pnpm migrate:apply` sequentially

# 4. Run the dev server
pnpm dev
```

### Other Dev Commands
```bash
# Check if lint passes on the codebase
pnpm lint

# Build the production version of the app
pnpm build

# Starts a production server using the latest build
pnpm start
```

## Deploying the App
### Vercel
The the canonical way to deploy for now. Haven't test it yet but should work since it's a Next app.
Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Future Plans
Initially the app will be for weekly goal planning and daily to-do lists for short-term goals for various projects that are compiled into one daily to-do list for each day.
Eventually it would be good to:
* Turn this into a scheduling app with a calendar view
* Allow for some scheduling between users on the same instance of the app to schedule events and meetings with each other in a way that makes it more seamless than doing something via Google Calendar or other calendar app. These should still be supported but there may be better ways to do
team-first kanban views and meeting scheduling that is more synchronized with how the internal scheduler will work.
* Probably some other stuff. Let's start with what we have first!
