export const LANGUAGE_ITEMS = [
  {
    text: '한국어',
    value: 'ko',
  },
  {
    text: '영어',
    value: 'en',
  },
  {
    text: '일본어',
    value: 'jp',
  },
];

export const HOTKEYS_KEY = {
  HELP: {
    TOGGLE: 'HOTKEY.HELP.TOGGLE',
  },
  LIVE: {
    TOGGLE: 'HOTKEY.LIVE.TOGGLE',
  },
  LANGUAGE: {
    SWAP: 'HOTKET.LANGUAGE.SWAP',
  },
  INPUT: {
    FOCUS: 'HOTKEY.INPUT.FOUCS',
  },
  COPY: {
    GOOGLE: 'HOTKEY.COPY.GOOGLE',
    NAVER: 'HOTKEY.COPY.NAVER',
    KAKAO: 'HOTKEY.COPY.KAKAO',
  },
};

export const HOTKEYS = {
  [HOTKEYS_KEY.HELP.TOGGLE]: {
    id: HOTKEYS_KEY.HELP.TOGGLE,
    command: 'ctrl+alt+h',
    description: '도움말을 연다/닫는다.',
  },
  [HOTKEYS_KEY.INPUT.FOCUS]: {
    id: HOTKEYS_KEY.INPUT.FOCUS,
    command: 'ctrl+alt+enter',
    description: 'input에 포커스를 준다.',
  },
  [HOTKEYS_KEY.LANGUAGE.SWAP]: {
    id: HOTKEYS_KEY.LANGUAGE.SWAP,
    command: 'ctrl+alt+-',
    description: '선택된 언어를 서로 뒤바꾼다.',
  },
  [HOTKEYS_KEY.LIVE.TOGGLE]: {
    id: HOTKEYS_KEY.LIVE.TOGGLE,
    command: 'ctrl+alt+t',
    description: '실시간 번역 기능을 스위칭.',
  },
  [HOTKEYS_KEY.COPY.GOOGLE]: {
    id: HOTKEYS_KEY.COPY.GOOGLE,
    command: 'ctrl+alt+8',
    description: '구글 번역 결과를 복사.',
  },
  [HOTKEYS_KEY.COPY.NAVER]: {
    id: HOTKEYS_KEY.COPY.NAVER,
    command: 'ctrl+alt+9',
    description: '네이버 번역 결과를 복사.',
  },
  [HOTKEYS_KEY.COPY.KAKAO]: {
    id: HOTKEYS_KEY.COPY.KAKAO,
    command: 'ctrl+alt+0',
    description: '카카오 번역 결과를 복사.',
  },
};