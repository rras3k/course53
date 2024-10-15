import version from '@/package.json';

export const getAppVersion = (): string => {
	return version.version;
}
console.log(version.version);