This is the personal site for Marc Expòsit Goy.

## How to upload it to GitHub pages for the first time?

- https://help.github.com/en/github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line
- https://help.github.com/en/github/using-git/setting-your-username-in-git

1. Install Git
2. Configure git
    1. git config --global user.name "your github user name"   -> to set your git username for github
3. Download previous repository
    1. The repository with the website has the name "marcexpositg.github.io". If it already has some content online it's easier to download it and create a folder locally.
    2. Clone the repository by following the instructions https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository
    3. Briefly, create a folder named "marcexpositg.github.io" where you want your website to be in your PC.
    4. Open it with VSCode, and open the terminal with (Ctrl + ñ).
    5. Copy the link of your github repository under "clone or download" and use it as:
    6. git clone *link of the website*
4. Delete all contents of the folder to delete the previous website
5. Copy the contents of the new website into that folder
6. Commit changes
   1. git add .
   2. git commit -m "2020 version of website v0.1"
7. Upload changes
   1. 
