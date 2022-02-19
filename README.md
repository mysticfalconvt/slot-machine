# The House Always Wins - NextJS

## Objective

Jackpot! You've landed a summer gig in Las Vegas! Unfortunately, its the year 2021, and the casinos are closed due to COVID-19. Your boss wants to move some of the business online and asks you to build a front-end app — a simple slot machine game, with a little twist. Build it to ensure that the house always wins!

### Brief
When a player starts a game, they are allocated 10 credits. Pulling the machine lever (rolling the slots) costs 1 credit. The game screen has 1 row with 3 blocks.  For player to win the roll, they have to get the same symbol in each block.

There are 4 possible symbols:
* cherry (10 credits reward)
* lemon (20 credits reward)
* orange (30 credits reward)
* watermelon (40 credits reward)

If the player keeps winning, they can play forever, but the house has something to say about that...
There is  CASH OUT button on the screen, but there's a twist there as well.

### Tasks
* Implement the assignment using the included nextjs app, we've given you a head start and included a prototype of the UI built using nextjs & tailwindcss.
* The App should use the designs in [this figma file](https://www.figma.com/file/4UqegvoJhsNgO4ogWrepZC/Township_Internal_EngineeringTest_WinBig_UI_001?node-id=6%3A730)
* The state of the game does not need to be persisted.
* When a user opens the app they have 10 starting credits.

**Roll Logic:**
* When a user has less than 40 credits in the game, their rolls are truly random.
* If a user has between 40 and 60 credits, then the house begins to slightly cheat:
	* For each winning roll, the house does one 30% chance roll which decides if we will re-roll the that round.
	* If that roll is true, then we re-roll and communicate the new result back.
* If a user has above 60 credits, the house acts the same, but in this case the chance of re-rolling the round increases to 60%.
	* If that roll is true, then the house re-rolls and communicates the new result back.
* There is a cash-out endpoint which resets the credits.

**User Experience:**
* After submitting a roll-request, all blocks should enter a spinning state (can be 'X' character spinning, but bonus points for getting spinner SVG from the internet).
* The first symbol should spin for 1 second more and then display the result, then display the second symbol at 2 seconds, then the third symbol at 3 seconds.
* If the user wins the round, their credit is increased by the amount from the roll response, else it is deducted by 1.
* Include a button on the screen that says "CASH OUT", but when the user hovers it, there is 50% chance that button moves in a random direction by 300px, and 40% chance that it becomes unclickable.
* Write tests as you deem necessary.

### Evaluation Criteria
* Completeness: did you complete the features as briefed?
* Correctness: does the solution perform in sensible, thought-out ways?
* Maintainability: is the code written in a clean, maintainable way?
* Testing: was the system adequately tested?

### CodeSubmit
Please organize, design, test and document your code as if it were going into production, or submitting a PR for your coworkers to review - then push your changes to the master branch. After you have pushed your code, you may submit the assignment on the assignment page.

All the best and happy coding,

The Township Team

### Setup Instructions:

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
