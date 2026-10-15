# Practical JavaScript Basics - Homework

Practice tasks and homework for the course Practical JavaScript Basics. Every task checks
your code and prints `OK` or `FAIL` for each check, and a final line such as
`5 of 7 checks passed`.

The lectures: https://ivapopova-courses.github.io/JS-Basics-Practical-IBM-Slides/

You need [Node.js](https://nodejs.org/) (version 18 or newer) and Git. No
`npm install` is needed.

## Set it up once

You clone this repository and keep it as `upstream` - new tasks come from there.
Your own repository is `origin` - your solutions go there.

1. On GitHub, create a new **empty** repository of your own (private is fine) -
   without a README, licence or `.gitignore`.
2. In a terminal:

   ```bash
   git clone https://github.com/ivapopova-courses/JS-Basics-Practical-IBM-Homework.git
   cd JS-Basics-Practical-IBM-Homework
   git remote rename origin upstream
   git remote add origin https://github.com/<your-user>/<your-repo>.git
   git push -u origin main
   ```

3. Open the folder in VSCode.

Check the remotes with `git remote -v`: `upstream` is this repository, `origin`
is yours.

## Run a task

Run commands from the root folder of the repository (the folder with this README):

```bash
node 02-variables-and-types/practice/task1-rule-variables.js
node 02-variables-and-types/homework.js
```

Edit only the parts of the files that the comments ask you to change.

## Save your work

```bash
git add .
git commit -m "Session 2 practice"
git push
```

## Get the new tasks

New lecture folders are added before each session. Commit your work first, then:

```bash
git pull upstream main
git push
```

Existing files are not changed after they are published, so the pull does not
conflict with your work.

## Layout

```text
check.js                       prints OK / FAIL and the final summary
data/sample-asset.json         made-up device report used by some tasks
NN-topic/practice/taskN-*.js   practice tasks of lecture NN
NN-topic/homework.js           homework of lecture NN
```

---

Built with Claude Sonnet 5.5 via Claude Code. Published by [SciScend](https://sciscend.com/).
