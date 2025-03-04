import {strict as assert} from "assert";
import libsodium from "libsodium-wrappers-sumo";

import { Seqner } from '../../src/keri/core/seqner';

describe('Seqner', () => {
    it('should generate Seqner number class', async () => {
        await libsodium.ready;
        let seqner = new Seqner({})
        assert.equal(seqner.sn, 0)
        assert.equal(seqner.snh, "0")
        assert.equal(seqner.qb64, "0AAAAAAAAAAAAAAAAAAAAAAA")
        assert.notStrictEqual(seqner.qb64b, new Uint8Array([ 48, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65 ]))
        assert.equal(seqner.raw.length, 16)
        assert.notStrictEqual(seqner.raw, new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]))
    });
});

