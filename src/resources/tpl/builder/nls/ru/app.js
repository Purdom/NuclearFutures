/* eslint quotes: ["error", "double"] */
/* strings files need to be double quotes */
define({
  "builder": {
    "dialog": {
      "apply": "Применить",
      "close": "Закрыть"
    },
    "header": {
      "sharingNotAvailable": "Недоступно, пока история не будет опубликована",
      "edit": "Редактировать"
    },
    "headerConfig": {
      "toggles": {
        "bookmarks": "Закладки",
        "logoSharing": "Логотип и общий доступ"
      },
      "bookmarks": {
        "title": "Раздел",
        "bookmark": "Закладка",
        "intro": "Закладки являются ссылками на разделы истории, которые отображаются в заголовке. Создание нескольких закладок для основных разделов истории поможет читателям ориентироваться.",
        "sequentialDefault": "Последовательный раздел (текст не найден)",
        "immersiveDefault": "Разнонаправленный раздел (текст не найден)",
        "titleDefault": "Раздел заголовка (текст не найден)",
        "coverDefault": "Раздел обложки (текст не найден)",
        "coverAppendage": "(Обложка)"
      },
      "logoSharing": {
        "logo": "Логотип",
        "logoButton": "Использовать логотип ${ESRI}",
        "useOrgLogo": "Использовать логотип организации",
        "useOrgLogoHelp": "Использовать логотип, предоставленный администратором",
        "logoLink": "Ссылка на логотип",
        "logoUploadProgress": "Загрузка логотипа выполняется",
        "logoUploadSuccess": "Логотип успешно загружен",
        "logoUploadError": "Загрузка логотипа не удалась, возврат к логотипу ${ESRI}",
        "customHeaderText": "Строка тегов",
        "taglineLinkDisabledTooltip": "Введите строку тегов, чтобы включить ссылку",
        "link": "Ссылка на строку тегов",
        "enableSocialSharing": "Отобразить кнопку публикации"
      }
    },
    "builderPanel": {
      "coverLabel": "Обложка",
      "creditsLabel": "Авторы",
      "betaFeedback": "Обратная связь",
      "betaNote": "Пожалуйста, сообщите нам, что вы думаете о ${APP_NAME}, а также если что-то работает не так, как ожидается.",
      "notSharedNote": "История не опубликована, она доступна только для вас.",
      "organizationWarning": "Чтобы гарантировать, что эта история может просматриваться другими пользователями, необходимо также опубликовать в организации ее сцены, слои сцен и встроенные приложения. Карты и слои карт публикуются автоматически.",
      "publicWarning": "Чтобы гарантировать, что эта история может просматриваться другими пользователями, необходимо также опубликовать ее сцены, слои сцен и встроенные приложения. Карты и слои карт публикуются автоматически.",
      "addTitleNote": "Добавьте заголовок на обложку для сохранения",
      "saveError": "При сохранении истории произошла ошибка.",
      "duplicate": "Дублировать",
      "organize": "Организовать",
      "done": "Готово",
      "invite": "При создании истории разделы будут отображаться здесь...",
      "mystoriestooltip": "Конструктор Cascade предупреждает об ошибках в истории и помогает исправить их. Сцены и вложенные приложения не проверяются, их следует проверить вручную."
    },
    "immersiveViewPanel": {
      "transition": "Переход",
      "fade": "Проявление",
      "fadeSlow": "Медленное затемнение",
      "swipeVertical": "Шторка по вертикали",
      "swipeHorizontal": "Шторка по горизонтали",
      "none": "Нет",
      "disabledConsecutiveSameMedia": "Недоступно, когда последовательные виды используют одни и те же медиа-ресурсы",
      "disabledTooltipMap": "Чтобы использовать этот переход, отображаемые слои обоих видов должны отличаться, а другие свойства карты быть одинаковыми",
      "disabledConsecutiveSameMap": "Недоступно, когда последовательные виды используют одну и ту же карту",
      "disabledNotInBeta": "Недоступно, когда последовательные виды используют одну и ту же карту",
      "disabledNonConsecutive": "Недоступно, поскольку имеются эти же медиа-ресурсы вне последовательности",
      "addMedia": "Добавить медиа-ресурсы",
      "invite": "При создании разнонаправленного раздела виды будут отображаться здесь..."
    },
    "mediaConfig": {
      "tabs": {
        "appearance": "Оформление",
        "manage": "Организовать",
        "size": "Размер",
        "background": "Фон",
        "issues": "Ошибки",
        "fixIssues": "Исправить ошибки"
      },
      "manage": {
        "changeMedia": "Изменить медиа",
        "edit": "Редактировать",
        "editAside": "Открывается в новой закладке браузера. После сохранения изменений, сохраните и перезагрузите историю, чтобы увидеть изменения.",
        "remove": "Убрать"
      },
      "appearance": {
        "homeView": "Начальный вид",
        "audio": "Аудио",
        "on": "Вкл.",
        "muted": "Звук отключен",
        "volumeAside": "Когда читатель доходит до этого вида, воспроизведение видео начинается автоматически. Если звук отключен, читатель не сможет включить его.",
        "view": "Вид",
        "resetLocation": "Сбросить местоположение",
        "resetLayers": "Сбросить слои",
        "clearPopup": "Очистить всплывающее окно",
        "interaction": "Взаимодействие",
        "interactionDisabled": "Взаимодействие отключено",
        "buttonToEnable": "Кнопка для включения",
        "interactionEnabled": "Взаимодействие включено",
        "interactionAside": "*На устройствах с сенсорных экранах будет отображаться кнопка взаимодействия.",
        "slide": "Слайд",
        "noSlides": "Нет доступных слайдов.",
        "mapExtentPrompt": "Обновите карту, чтобы рассказать свою историю, щелкните отметку, чтобы сохранить изменения"
      },
      "sectionAppearance": {
        "layout": "Компоновка",
        "theme": "Тема"
      },
      "size": {
        "small": "Малый",
        "medium": "Средний",
        "large": "Большой"
      },
      "background": {
        "noCrop": "Не обрезать изображение",
        "mostImportantPart": "Выберите наиболее важную точку",
        "cropExplanationImmersive": "Выберите точку на изображении, чтобы задать обрезку изображения при различных размерах экрана. Выбранная точка всегда будет видна. Отметьте опцию ниже, если вы хотите, чтобы медиа-ресурс всегда отображался полностью.",
        "cropExplanation": "Выберите точку на изображении, чтобы задать обрезку изображения при различных размерах экрана. Выбранная точка всегда будет видна.",
        "color": "Цвет",
        "previews": "Предварительный просмотр"
      }
    },
    "imageGallery": {
      "addImage": "Добавить другое изображение",
      "moveBackward": "Переместить назад",
      "moveForward": "Переместить вперед"
    },
    "cover": {
      "titlePrompt": "Введите заголовок истории...",
      "subtitlePrompt": "Пролистайте вниз, чтобы начать, или введите дополнительный подзаголовок",
      "mediaPlaceholder": "Добавьте изображение или видео",
      "saveError": "Сохранить не удалось, элемент с таким заголовком уже существует"
    },
    "credits": {
      "sectionInvite": "Добавить раздел об авторах",
      "warning": "Оба поля должны быть заполнены",
      "content": "Содержание...",
      "source": "Источник...",
      "linkPrompt": "Дополнительная ссылка",
      "introductionPlaceholder": "Дополнительно, введите вступление к разделу об авторах..."
    },
    "immersive": {
      "titleConfig": {
        "theme": "Тема"
      },
      "panelConfig": {
        "position": "Положение",
        "theme": "Тема",
        "size": "Размер",
        "background": "Фон",
        "layout": "Прокрутка (для всех панелей)"
      }
    },
    "title": {
      "placeholder": "Введите название..."
    },
    "media": {
      "imageUpload": "Загрузка изображения выполняется...",
      "imageUploadSuccess": "Изображение успешно загружено",
      "imageUploadFail": "Сбой при загрузке изображения"
    },
    "controller": {
      "sectionOrganize": "Вы организовали разделы",
      "immersiveOrganize": "Вы организовали виды",
      "sectionDelete": "Вы удалили раздел",
      "viewDelete": "Вы удалили вид"
    },
    "notification": {
      "cancel": "Отмена",
      "close": "Закрыть",
      "undo": "Отменить"
    },
    "sections": {
      "sequence": "Повествовательный раздел",
      "immersive": "Разнонаправленный раздел",
      "title": "Раздел заголовка"
    },
    "mediaErrors": {
      "mediaTypes": {
        "image": "изображение",
        "webmap": "карта",
        "webscene": "сцена",
        "video": "видео",
        "content": "содержание",
        "webpage": "веб-страница"
      },
      "placeholders": {
        "generic": "Этот ресурс недоступен.",
        "deleted": "Этот ${media-type} был удален.",
        "inaccessible": "Этот ${media-type} недоступен.",
        "unauthorized": "Вы не авторизованы для просмотра этого ${media-type}.",
        "unshared": "Этот ${media-type} не опубликован так же, как ваша история.",
        "othersUnshared": "Этот ${media-type} не опубликован так же, как ваша история.",
        "subscriptionContent": "Этот ${media-type} содержит слой подписчика.",
        "premiumContent": "Этот ${media-type} содержит премиум-слой.",
        "secureService": "Этот ${media-type} содержит защищенный слой."
      },
      "mapIssues": {
        "fixButton": "Исправить ошибки",
        "nofixButton": "Ошибки",
        "mapLabel": "Карта:",
        "summaries": {
          "unshared": "Неопубликованные ресурсы",
          "othersUnshared": "Неопубликованные ресурсы другого пользователя",
          "subscriptionContent": "Ресурсы подписчика",
          "premiumContent": "Премиум-ресурсы",
          "secureContent": "Защищенный ресурс",
          "deleted": "Удаленный ресурс",
          "inaccessible": "Недоступный ресурс",
          "unauthorized": "Неавторизованный ресурс"
        },
        "descriptions": {
          "unshared": "Этот ресурс не опубликован так же, как ваша история.",
          "othersUnshared": "Этот ресурс принадлежит другому пользователю и не опубликован так же, как ваша история.",
          "othersUnsharedAuthorized": "Этот ресурс принадлежит другому пользователю, но вы можете опубликовать его.",
          "inaccessible": "Этот ресурс недоступен.",
          "deleted": "Этот ресурс был удален.",
          "unauthorized": "Вы не авторизованы для просмотра этого ресурса.",
          "popupFeatureLayer": "Всплывающие окна слоя листов поступают из векторного слоя, который не опубликован так же, как ваша история.",
          "subscriptionContent": "Необходимо авторизовать ресурсы подписчика для публичного пользования.",
          "premiumContent": "Необходимо авторизовать премиум-ресурсы для публичного пользования.",
          "secureService": "Защищенные ресурсы недоступны для ваших читателей.",
          "missingItemWarning": "Элемент, связанный с эти слоем, был удален."
        },
        "tooltips": {
          "unshared": "Щелкните, чтобы узнать больше о совместном использовании.",
          "othersUnshared": "У вас нет прав на публикацию ресурсов, принадлежащих другим пользователям. Попросите владельца опубликовать ресурс, удалите карту из истории или отредактируйте ее, чтобы удалить не принадлежащие вам слои. Щелкните, чтобы узнать о редактировании карт.",
          "inaccessible": "Удалите эту карту из истории или отредактируйте ее, чтобы убрать недоступные слои. Щелкните, чтобы узнать о редактировании карт.",
          "deleted": "Удалите эту карту из истории или отредактируйте ее, чтобы убрать отсутствующие слои. Щелкните, чтобы узнать о редактировании карт.",
          "unauthorized": "Удалите эту карту из истории или отредактируйте ее, чтобы убрать неавторизованные слои. Щелкните, чтобы узнать о редактировании карт.",
          "popupFeatureLayer": "Всплывающие окна слоя листов поступают из векторного слоя, который не опубликован так же, как ваша история.",
          "subscriptionContent": "Ресурсы подписчика не используют кредиты. Щелкните, чтобы узнать подробнее.",
          "premiumContent": "При каждом просмотре премиум-слоя будут расходоваться кредиты вашей организации. Щелкните, чтобы узнать подробнее.",
          "secureService": "Удалите защищенные ресурсы из вашей истории или щелкните, чтобы узнать, как авторизовать защищенные ресурсы, чтобы их могли видеть другие пользователи.",
          "missingItemWarning": "Этот слой еще работает, но его символы, всплывающие окна или имя могли быть изменены. Убедитесь, что слой отображается правильно или удалите его из истории."
        },
        "fixButtons": {
          "share": "Опубликовать",
          "hide": "Скрыть",
          "authorize": "Авторизация",
          "remove": "Убрать",
          "help": "Получить справку",
          "ignore": "Игнорировать",
          "confirm": "Подтвердить",
          "edit": "Редактировать карту"
        },
        "shareNotifications": {
          "alsoSharedMapsAndLayers": "Некоторые карты и слои также были опубликованы.",
          "alsoSharedMaps": "Некоторые карты также были опубликованы.",
          "alsoSharedLayers": "Некоторые слои также были опубликованы.",
          "sharedOthersContent": "Вы использовали права администратора для публикации ресурсов других пользователей."
        }
      },
      "storyHealth": {
        "healthy": "Ошибок нет",
        "notHealthy": "Исправить ошибки",
        "warnings": "Просмотр предупреждений"
      }
    }
  }
});