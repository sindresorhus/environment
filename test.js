import test from 'ava';
import {
	isBrowser,
	isNode,
	isBun,
	isDeno,
	isElectron,
	isJsDom,
	isWebWorker,
	isDedicatedWorker,
	isSharedWorker,
	isServiceWorker,
} from './index.js';

test('node', t => {
	t.true(isNode);
	t.false(isBrowser);
	t.false(isBun);
	t.false(isDeno);
	t.false(isElectron);
	t.false(isJsDom);
	t.false(isWebWorker);
	t.false(isDedicatedWorker);
	t.false(isSharedWorker);
	t.false(isServiceWorker);
});
