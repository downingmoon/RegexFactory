'use strict'
/**
 * Javascript Regular Expression Helper
 * Author: DowningMoon
 * 2020.09.11
 * @see https://github.com/downingmoon/RegexFactory
 */
class RegexHelper {
    /**
     * 숫자만[0-9]
     */
    static NUM = 'N01';
    NUM_VALUE = /^[0-9]*$/
    /**
     * 영문&숫자[0-9]
     */
    static NUM_ALPHABET = 'N02';
    NUM_ALPHABET_VALUE = /^[A-Za-z0-9]*$/;

    /**
     * 휴대폰 번호[010-0000-0000]
     */
    static HP_TYPE_1 = 'HP01';
    HP_TYPE_1_VALUE = /^01([0|1|6|7|8|9]?)-?([0-9]{4})-?([0-9]{4})$/;

    /**
     * 영문&숫자&특수문자 최소 8자
     */
    static PW_TYPE_1 = 'PW01';
    PW_TYPE_1_VALUE = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

    constructor () {}

    /**
     * 유효성 체크 실행
     * @param {String} t RegexHelper 내장 타입
     * @param {String} s 유효성 체크를 실행할 문자열
     */
    check(t, s) {
        return this.typeCheck(t).test(s);
    }

    typeCheck(t) {
        let r = "";
        switch (t) {
            case RegexHelper.NUM:
                r = this.NUM_VALUE;
                break;
            case RegexHelper.NUM_ALPHABET:
                r = this.NUM_ALPHABET_VALUE;
                break;
            case RegexHelper.HP_TYPE_1:
                r = this.HP_TYPE_1_VALUE;
                break;
            case RegexHelper.PW_TYPE_1:
                r = this.PW_TYPE_1_VALUE;
                break;
            default:
                throw new Error("RegexHelper 내장 타입이 아닙니다.");
        }
        return r;
    }
}

