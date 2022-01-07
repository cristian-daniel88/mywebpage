
export const CAPTCHA_ERROR = "CAPTCHA_ERROR"




export const captchaErrorAction = (value) => ({
    type: CAPTCHA_ERROR,
    payload: value
})