# GIT
…or create a new repository on the command line
echo "# Angular" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/mrinalkumarjha/Angular.git
git push -u origin master
…or push an existing repository from the command line
git remote add origin https://github.com/mrinalkumarjha/Angular.git
git push -u origin master
…or import code from another repository
You can initialize this repository with code from a Subversion, Mercurial, or TFS project.

# Git process to commit file from git bash

Ref  link : https://www.earthdatascience.org/workshops/intro-version-control-git/basic-git-commands/

git status: for checking status like tracked or untracked
git add --all: Add all the files to tracking
git reset : to unstage all changes
git reset <file> : to unstage particular file
git commit -m 'message': to commit to local directory
git push : to push in original branch
git pull : to pull changes from git




# Angular


# 1:
if we install angular via npm (npm install angular) it install angular 1.7 by default

# 2: 
Getting the new angular is difficult. And running the first angular application is MORE difficult. Reason : new angular is organised into modules. For example for angular http we can just download http module from npm and use it. if we want to do angulat animation we can just download angular animation module. So downloading each of them one by one is difficult each time.

For ex : if want to run your first application using angular you need to integrate typescript, you need to integrate node, you need to integrate webpack, tsconfig.json, packageconfig.json and  so on..  
Thats the reason we have angular cli. angular cli is command line interface(.exe file) which willl help you to get everything needed for angular. it will create directory structure, it will download angular, it will do everything for you.

# 3:
when we install any package with -g flag. it is installed globally. then we can run it from any command prompt. so we install angular cli globally

# npm install @angular/cli -g

# 4:

To create project using cli use ng new CustomerApplication




