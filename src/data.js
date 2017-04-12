export const material = {
    material_id: 213,
    rightholder: {
        rightholder_id: 9876,
        caption_original: 'Massachusetts Institute of Technology',
        caption_translated: 'Массачусетский технологический институт',
        short_original: 'MIT',
        short_translated: 'МТИ',
        link: 'http://web.mit.edu/',
        icon: 'http://web.mit.edu/files/images/homepage/default/mit_logo.gif?v=1487307612'
    },
    owner: {
        user_id: 4567,
        nickname: 'jonny',
        avatar: 'http://gravatar.com/jonny',
        created_at: 1,
        updated_at: 1
    },
    origignal_link: 'https://ocw.mit.edu/computer-science/B8is52oxHBw.srt',
    caption_original: 'Objects in Python',
    caption_translated: 'Объекты в Python',
    annotation_original: 'This lecture introduces Python',
    annotation_translated: 'В данной лекции вводятся понятия языка Python',
    state: {
        state_id: 34712,
        name: 'import',
        display_name: 'Импорт'
    },
    license: {
        license_id: 7123,
        name: 'CC BY-NC-SA 4.0',
        link: 'https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode'
    },
    tags: [],
    original_language: 'ru',
    translation_language: 'en',
    created_at: 1,
    updated_at: 1
};

export const chunks = {
    8712: {
        chunk_id: 8712,
        material_position: 0,
        type: {
            chunk_type_id: 1,
            name: 'text',
            display_name: 'Текст'
        },
        translatable: true,
        body: 'Hey bro!',
        translations: ['987', '988'],
        comments: [],
        created_at: 1,
        updated_at: 1
    },
    8713: {
        chunk_id: 8713,
        material_position: 1,
        type: {
            chunk_type_id: 1,
            name: 'text',
            display_name: 'Текст'
        },
        translatable: true,
        body: 'foo',
        translations: [],
        comments: [],
        created_at: 1,
        updated_at: 1
    },
    8714: {
        chunk_id: 8714,
        material_position: 2,
        type: {
            chunk_type_id: 1,
            name: 'text',
            display_name: 'Текст'
        },
        translatable: true,
        body: 'bar',
        translations: [],
        comments: [],
        created_at: 1,
        updated_at: 1
    }
};

export const translations = {
    $draft: {
        body: '',
        translator: {}
    },
    987: {
        translation_id: '987',
        chunk_id: 8712,
        translator: {
            user_id: 4567,
            nickname: 'jonny',
            avatar: 'http://gravatar.com/jonny',
            created_at: 1,
            updated_at: 1
        },
        body: 'Хей бро!',
        rating: 1,
        rates: [
            {
                rate_id: 8762,
                rater: {
                    user_id: 4567,
                    nickname: 'jonny',
                    avatar: 'http://gravatar.com/jonny',
                    created_at: 1,
                    updated_at: 1
                },
                value: 1,
                created_at: 1,
                updated_at: 1
            }
        ],
        created_at: 1,
        updated_at: 1
    },
    988: {
        translation_id: '988',
        chunk_id: 8712,
        translator: {
            user_id: 4568,
            nickname: 'sam',
            avatar: 'http://gravatar.com/sam',
            created_at: 2,
            updated_at: 2
        },
        body: 'Привет чувак!',
        rating: 1,
        rates: [
            {
                rate_id: 8767,
                rater: {
                    user_id: 4567,
                    nickname: 'jonny',
                    avatar: 'http://gravatar.com/jonny',
                    created_at: 1,
                    updated_at: 1
                },
                value: 1,
                created_at: 1,
                updated_at: 1
            }
        ],
        created_at: 2,
        updated_at: 2
    }
};