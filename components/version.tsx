import { getAppVersion } from '@/lib/rrasb2k/app';

export default function Version() {
	return (
		<>
			{getAppVersion()}
		</>
	)
}
