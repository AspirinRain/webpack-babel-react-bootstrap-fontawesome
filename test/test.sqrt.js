/**
 * Created by ChenShuai on 2017/2/23.
 */
import chai from 'chai';
import My from '../src/js/math/sqrt';

const expect = chai.expect;

describe('sqrt', function() {
    it('4的平方根应该等于2', function() {
        expect(My.sqrt(4)).to.equal(2);
    });

    it('参数为负值时应该报错', function() {
        expect(function(){ My.sqrt(-1); }).to.throw('负值没有平方根');
    });

});