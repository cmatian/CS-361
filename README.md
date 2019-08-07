# cs361
Group 3 - Alcohol Auto-Tester Project - Summer 2019

## Set Up
Run `git clone https://github.com/cmatian/CS-361.git` in a directory of your choice from the command line. 


## Pushing to Remote from Local

You can push changes, additions, et al directly to the `master` branch by following this quick step-by-step:

***

#### 0. `git status`

Optional. Let's you check what your current file changes are. Very useful.

#### 1. `git add .` 

Tracks and stages any of the changes you've made locally.

***

#### 2. `git commit -m "Some commit message"`

Creates a message tag for that cluster of changes.

***

#### 3. `git push origin master`

Pushes the changes to the repository.

***

## Pulling from Remote to Local

If the repo has been modified by other teammates, you can simply update your local repo by running `git pull origin master` while checked into the directory of your local repo. 

Afterwards, you can optionally call `git fetch -p` to pull any branch tracking information (someone may have submitted their changes to a branch not on master), as well as pruning deleted branches. 

In most cases, the `git fetch -p` command won't really be needed for this project.  


## Helpers

You can optionally use Github's desktop client to track changes and manage your commits. It might be easier if you're not used to using the command line with Git. 

https://desktop.github.com/
