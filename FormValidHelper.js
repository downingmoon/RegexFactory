'use strict'
/**
 * Javascript Regular Expression Factory
 * Author: DowningMoon
 * 2020.09.12
 * @see https://github.com/downingmoon
 */
class FormValidHelper {
    constructor () {}
    /**
     * Form Validation
     * @param {Object} frm Form Object(document.formName)
     * @param {String} hiddenYn Hidden 타입의 Input Null 체크 여부. Default N
     * @param {String} msg Validation Fail 시 노출될 Message
     */
    static nullCheck(frm, hiddenYn = 'N', msg = "입력되지 않은 항목이 있습니다.") {
        let el = Object.values(frm.elements);
        el = el.filter((e) => {
            return hiddenYn == "N" ? (e.tagName.toUpperCase() == "INPUT" || e.tagName.toUpperCase() == "TEXTAREA") : ((e.tagName.toUpperCase() == "INPUT" && e.type.toUpperCase() == "hidden") || e.tagName.toUpperCase() == "TEXTAREA")
        });
        let res = true;
        el.forEach(i => {
            if(i.value == "" || i.value === undefined || i.value == null) {
                res = false;
                alert(msg);
                return false;
            }
        });
        return res;
    }
}

