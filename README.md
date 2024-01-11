# Prerequisite
1. Install Visual Studio 2022
2. (Optional) Install .NET 6 SDK: https://dotnet.microsoft.com/en-us/download/dotnet/6.0
3. Install SQL Server
4. Install Node.js
# Run API
1. Open WebOnLinuxDemoAPI/WebOnLinuxDemoAPI.sln by Visual Studio
2. Modify `DefaultConnection` in `appsettings.json` if needed
3. Press `F5` to run as Debug mode
## Deploy on Linux
1. Chose `Build` -> `Publish` to publish the app, then copy to Linux server
2. Follow this instruction for deployment: https://learn.microsoft.com/en-us/aspnet/core/host-and-deploy/linux-nginx?view=aspnetcore-6.0&tabs=linux-ubuntu#monitor-the-app
# Run frontend
1. Navigate to `WebOnLinuxDemoFrontend`
2. Open `cmd` and execute `npm i` to install all required packages. Only need to do this step 1 time.
3. Execute `npm start` to open the result.
## Deploy on Linux
1. Execute `npm run build` to make static files like html, css, js
2. Copy all content inside `build` folder to root directory of web server (normally at `/var/www/`).