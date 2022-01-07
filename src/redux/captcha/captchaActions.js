export const CAPTCHA = "CAPTCHA";
export const CAPTCHA_ERROR = "CAPTCHA_ERROR"



export const captchaAction = (value) => ({
  type: CAPTCHA,
  payload: value
});

export const captchaErrorAction = (value) => ({
    type: CAPTCHA_ERROR,
    payload: value
})