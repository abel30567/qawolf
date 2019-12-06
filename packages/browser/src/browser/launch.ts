import { CONFIG } from "@qawolf/config";
import { logger } from "@qawolf/logger";
import { Size } from "@qawolf/types";
import { platform } from "os";
import {
  launch as launchPuppeteerBrowser,
  LaunchOptions as PuppeteerLaunchOptions
} from "puppeteer";
import { Device } from "puppeteer/DeviceDescriptors";
import { Browser } from "./Browser";
import { getDevice } from "./device";
import { InternalBrowser } from "./InternalBrowser";
import { managePages } from "./managePages";
import { registry } from "./registry";

export type LaunchOptions = {
  domPath?: string;
  recordEvents?: boolean;
  size?: Size;
  url?: string;
};

const buildPuppeteerOptions = (device: Device) => {
  const launchOptions: PuppeteerLaunchOptions = {
    args: [
      "--disable-dev-shm-usage",
      "--no-default-browser-check",
      "--window-position=0,0",
      `--window-size=${device.viewport.width + CONFIG.chromeOffsetX},${device
        .viewport.height + CONFIG.chromeOffsetY}`
    ],
    defaultViewport: null,
    headless: CONFIG.headless
  };

  if (platform() === "linux") {
    launchOptions!.args!.push("--disable-gpu");
    launchOptions!.args!.push("--disable-setuid-sandbox");
    launchOptions!.args!.push("--no-sandbox");
  }

  if (CONFIG.chromeExecutablePath) {
    launchOptions.executablePath = CONFIG.chromeExecutablePath;
  }

  return launchOptions;
};

export const launch = async (options: LaunchOptions = {}): Promise<Browser> => {
  logger.verbose(`launch: ${JSON.stringify(options)}`);

  const device = getDevice(options.size);

  const browser = (await launchPuppeteerBrowser(
    buildPuppeteerOptions(device)
  )) as Browser;

  const internal = new InternalBrowser({
    ...options,
    browser,
    device
  });

  // decorate Browser with our helpers
  browser.find = internal.find.bind(internal);
  browser.goto = internal.goto.bind(internal);
  browser.page = internal.page.bind(internal);
  browser._qawolf = internal;

  await managePages(browser);

  registry.register(browser);

  if (options.url) await internal.goto(options.url);

  return browser;
};