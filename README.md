# Browsersync Example for WSL2

The browsersync example on [https://browsersync.io/](https://browsersync.io/) works with ease on linux, but when I tried using browsersync on WSL2 it just wouldn't work or partially work. There was alot of extra effort to get browsersync working in WSL2, and this example shows how I got it working.

Some information about my system:

```powershell
PS C:\Users\Mr Smith> wsl -l -v
  NAME                   STATE           VERSION
* Ubuntu-20.04           Running         2
```

Follow these steps, and hopefully browsersync will work for your WSL2 environment.

## Step #1 - Use your linux home path.

You must use your /home/[username] path.

```bash
mrsmith@miyasato:browser-sync-example$ pwd
/home/mrsmith/browser-sync-example
```

Do not use paths off of /mnt

```bash
mrsmith@miyasato:browser-sync-example$ pwd
/mnt/c/Users/Mr Smith/Desktop/browser-sync-example
```

Thanks to [Isze](https://github.com/lsze) for their comment on [github.com](https://github.com/BrowserSync/browser-sync/issues/1817#issuecomment-736090318)

## Step #2 - Configure your default browser with wslview

You will need to configure your default browser via [wslview](https://wslutiliti.es/wslu/man/wslview.html). wslview is part of [wslu](https://wslutiliti.es/wslu/) which may already be bundled with your distro choice in WSL2.

Just check with the **which** command:

```bash
mrsmith@miyasato:browser-sync-example$ which wslview
/usr/bin/wslview
```

Yup, its installed.

If you don't have wslview, you will need to install wslu from here:
https://wslutiliti.es/wslu/install.html

## Step #3 - Run the wslview commands:

### For Google Chrome:

```bash
wslview -r $(wslpath -au 'C:\Program Files (x86)\Google\Chrome\Application\chrome.exe')
```

### For Microsoft Edge:

```bash
wslview -r $(wslpath -au 'C:\Windows\SystemApps\Microsoft.MicrosoftEdge_8wekyb3d8bbwe\MicrosoftEdge.exe')
```

Thanks to [Emmanuel Adu Gyamfi](https://stackoverflow.com/users/7121971/emmanuel-adu-gyamfi) for his [stackoverflow](https://stackoverflow.com/questions/52691835/wsl-ubuntu-how-to-open-localhost-in-browser-from-bash-terminal) post on wslview.

## Step #4 - Time to start developing

1. npm install

```bash
mrsmith@miyasato:browser-sync-wsl2-example$ npm install

up to date, audited 282 packages in 2s

19 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

2. npm start

```bash
mrsmith@miyasato:browser-sync-wsl2-example$ npm start

> browser-sync-example@1.0.0 start
> grunt

>> 🐗 GRUNT The JavaScript Task Runner

Running "browserSync:dev" (browserSync) task
[Browsersync] Access URLs:
 ----------------------------------------
       Local: http://localhost:3000
    External: http://192.168.220.147:3000
 ----------------------------------------
          UI: http://localhost:3001
 UI External: http://localhost:3001
 ----------------------------------------
[Browsersync] Serving files from: ./app
[Browsersync] Watching files...

Running "watch" task
Waiting...
[Browsersync] Reloading Browsers...
>> File "app/scss/main..scss" changed.
>> 🐗 GRUNT The JavaScript Task Runner

Running "sass:dev" (sass) task

Done.
Completed in 1.391s at Tue May 23 2023 22:19:24 GMT-0700 (Pacific Daylight Time) - Waiting...
[Browsersync] File event [change] : app/css/main.css
```

3. **_YOUR READY!_** Open your browser at http://localhost:3000

4. Edit the app/index.html file and save. The browser will **re-render WITH A PAGE REFRESH** after saving an **HTML file**.

5. Edit the SCSS and the browser will **re-render WITHOUT A PAGE REFRESH** after saving an **SCSS file**.

---

## More on WSL

- [Windows Subsystem for Linux Documentation](https://learn.microsoft.com/en-us/windows/wsl/)
- [Ubuntu on WSL](https://ubuntu.com/wsl)
