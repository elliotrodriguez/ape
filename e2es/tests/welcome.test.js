const wdio = require("webdriverio");

// const caps = {
//     path: "/wd/hub",
//     port: 4723,
//     capabilities: {
//         platformName: "Android",
//         platformVersion: "11",
//         deviceName: "Pixel3a_Android_11",
//         automationName: "UIAutomator2",
//         app: `/Users/elliotrodriguez/AwesomeProjectElliot/android/app/build/outputs/apk/release/app-release.apk`
//     }
// }

const caps = {
    maxInstances: 2
}



describe("Welcome e2es", () => {
    let app;

    beforeAll(async () => {
        app = await wdio.remote(caps); 
    })

    it("does things", async () => {
        const welcomeComponent = await app.$("~welcomeMessage")
        expect(welcomeComponent).toBeDefined()
    });
})