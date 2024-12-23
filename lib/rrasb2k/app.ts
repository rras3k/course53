import version from '@/package.json'; // pour getAppVersion

// Version de l'application
export const getAppVersion = (): string => {
	return version.version;
}

// Mode de l'application
export const isProduction = process.env.NEXT_PUBLIC_MODE === "production";
export const isDev = process.env.NEXT_PUBLIC_MODE === "development";
export const isTest = process.env.NEXT_PUBLIC_MODE === "testing"


const isPwaInstalled = (): boolean => {


	const UA = navigator.userAgent;

	const IOS = UA.match(/iPhone|iPad|iPod/);
	//const ANDROID = UA.match(/Android/);

	// const PLATFORM = IOS ? 'ios' : ANDROID ? 'android' : 'unknown';

	const standalone = window.matchMedia('(display-mode: standalone)').matches;

	const INSTALLED = !!(standalone || (IOS && !UA.match(/Safari/)));


	// console.log("instaled ???????", INSTALLED)
	return INSTALLED
}
export { isPwaInstalled }


function getPWADisplayMode() {
	if (document.referrer.startsWith('android-app://'))
		return 'twa';
	if (window.matchMedia('(display-mode: browser)').matches)
		return 'browser';
	if (window.matchMedia('(display-mode: standalone)').matches)
		return 'standalone';
	if (window.matchMedia('(display-mode: minimal-ui)').matches)
		return 'minimal-ui';
	if (window.matchMedia('(display-mode: fullscreen)').matches)
		return 'fullscreen';
	if (window.matchMedia('(display-mode: window-controls-overlay)').matches)
		return 'window-controls-overlay';

	return 'unknown';
}
export { getPWADisplayMode }
