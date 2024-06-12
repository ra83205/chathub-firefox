<p align="center">
    <img src="./src/assets/icon.png" width="150">
</p>

<h1 align="center">🚀 ChatHub Free for Firefox - Bringing All Chats Together! 🌟</h1>

## ✨ Features You'll Love

- 🤖 **Multi-Chats**: Connect and use ChatGPT, Bing Chat, Google Bard, Claude, and many more all in one place. How cool is that?
- 💬 **Instant Comparisons**: Chat with multiple bots simultaneously and compare their responses on the fly.
- 🚀 **API & GPT-4**: Full support for all the latest APIs from ChatGPT and GPT-4 Browsing.
- 🔍 **Hotkeys**: Quickly activate the app from anywhere in your browser.
- 🎨 **Markdown & Code Highlighting**: Clean and stylish text in every chat.
- 📚 **Template Library**: Create and save your message templates.
- 💾 **Local History**: All your chat history stays with you.
- 📥 **Data Export & Import**: Easily move your data between devices.
- 🔗 **Share Chats**: Generate beautiful markdown versions of your chats and share them.
- 🌙 **Dark Mode**: Protect your eyes with a sleek dark theme.
- 🌐 **Web Access**: Chat directly from your browser.

## 🤖 Supported Bots

- ChatGPT (Web/API/Azure/Poe)
- Bing Chat
- Google Bard
- Claude 2 (Web/API/Poe)
- LLaMA 2
- ChatGLM
- Pi by Inflection
- Vicuna
- WizardLM
- iFlytek Spark
- Tongyi Qianwen
- Baichuan
- *and many more...*

## 🛠️ How to Build from Source

Want to build your own version? It's simple!

1. **Clone the project**:
    ```shell
    git clone https://github.com/ra83205/chathub-firefox
    ```
2. **Enable Corepack**:
    ```shell
    corepack enable
    ```
3. **Install dependencies**:
    ```shell
    yarn install
    ```
4. **Build the project**:
    ```shell
    yarn build
    ```
5. **Load extension in Chrome/Edge**:
    - Go to the extensions page: `chrome://extensions` or `edge://extensions`
    - Enable Developer Mode
    - Drag the `dist` folder onto the page to import it (don't delete the folder afterward)

## 🦊 Firefox Version

Developers haven't released a version for Firefox for a long time, so I took matters into my own hands! I also removed the paid version, so now you can enjoy all the features for free! 🚀 The Firefox version is built with the command: `yarn build:ff`

1. **Clone the project**:
    ```shell
    git clone https://github.com/ra83205/chathub-firefox
    ```
2. **Enable Corepack**:
    ```shell
    corepack enable
    ```
3. **Install dependencies**:
    ```shell
    yarn install
    ```
4. **Build the project for Firefox**:
    ```shell
    yarn build:ff
    ```
5. **Load the extension in Firefox**:
    - Open Firefox and go to the `about:debugging` page
    - Select "This Firefox"
    - Click "Load Temporary Add-on"
    - Choose the `manifest.ff.config.ts` file from the `dist_ff` folder

Enjoy an enhanced chat experience by joining our awesome community of users! ✨
