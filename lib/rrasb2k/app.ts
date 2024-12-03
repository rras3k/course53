import version from '@/package.json'; // pour getAppVersion

// Version de l'application
export const getAppVersion = (): string => {
	return version.version;
}

// Mode de l'application
export const isProduction = process.env.NEXT_PUBLIC_MODE === "production";
export const isDev = process.env.NEXT_PUBLIC_MODE === "development";
export const isTest = process.env.NEXT_PUBLIC_MODE === "testing"


