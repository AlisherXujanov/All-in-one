# Setting Up Ubuntu on Windows via Microsoft Store and Configuring VSCode  

## Introduction  
In this document, I will detail my experience of installing Ubuntu on Windows through the Microsoft Store and configuring Visual Studio Code (VSCode) to enhance my development workflow. This process allowed me to utilize the power of Linux while working in a familiar Windows environment, improving my productivity and access to development tools.  

## Installing Ubuntu through Microsoft Store  

### - WSL installation from Microsoft Store  
- To begin the installation of Ubuntu, in the search bar, I typed "Ubuntu" and browsed the available versions. I chose the latest version (e.g., Ubuntu 22.04 LTS) for installation.  
- Upon launching Ubuntu for the first time, I followed the prompts to set up my user account and password. This setup is essential for accessing the Linux command line.  


### Extensions Marketplace in VSCode  
- In VSCode, I clicked on the Extensions view icon in the Activity Bar on the side of the window or pressed `Ctrl + Shift + X`.  
- Searched for WSL in the Extensions view search bar.
- Clicked on the Install button for the Remote - WSL extension.


### Configuration of VSCode for WSL
- Pressed `Ctrl + Shift + P` to open the Command Palette.
- Typed `Remote-WSL: New Window` and selected the option to open a new window in the WSL environment.
- Waited for the new window to open in the WSL environment.

**`NOTE:`**
- If you get an error at that time, try to open remote-explorer on the left side menu of VSCode and choose to open it manually.




## Additional Resources  
- [Ubuntu Official Documentation](https://ubuntu.com/tutorials)  
- [Visual Studio Code Documentation](https://code.visualstudio.com/docs)