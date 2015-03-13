module.exports = function (grunt) {
    /* конфиг проекта */
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                options: {
                    rootpath: "/", /* установлен для правильного использования относительных путей в проекте */
                    compress: true
                },
                files: {
                    /* главный файл стилей */
                    /* подготовка стилей для jQuery Scrollbar */
                    "build/bitrix/templates/cosmo/css/___jquery.custom-scrollbar.css": "source/bitrix/templates/cosmo/css/jquery.custom-scrollbar.less",
                    "build/bitrix/templates/cosmo/css/style.css": "source/bitrix/templates/cosmo/css/style.less",
                    
                    /* стили для адаптивного дизайна */
                    /* подготовка стилей для планшета и телефона */
                    "build/bitrix/templates/cosmo/css/___adaptive760.css": "source/bitrix/templates/cosmo/css/adaptive760.less",
                    "build/bitrix/templates/cosmo/css/___adaptive320.css": "source/bitrix/templates/cosmo/css/adaptive320.less",
                    "build/bitrix/templates/cosmo/css/adaptive.css": "source/bitrix/templates/cosmo/css/adaptive.less",
                    
                    /* формы быстрого заказа */
                    "build/bitrix/templates/.default/components/os/quick_order/available_item_order/style.css": "source/bitrix/templates/.default/components/os/quick_order/available_item_order/style.less",
                    "build/bitrix/templates/.default/components/os/quick_order/disavailable_item_order/style.css": "source/bitrix/templates/.default/components/os/quick_order/disavailable_item_order/style.less",
                    "build/bitrix/templates/.default/components/os/quick_order/offer/style.css": "source/bitrix/templates/.default/components/os/quick_order/offer/style.less",
                    "build/bitrix/templates/.default/components/os/quick_order/out_of_store/style.css": "source/bitrix/templates/.default/components/os/quick_order/out_of_store/style.less",
                    "build/bitrix/templates/.default/components/os/quick_order/stihl_viking_order/style.css": "source/bitrix/templates/.default/components/os/quick_order/stihl_viking_order/style.less",
                    
                    /* сравнение */
                    "build/bitrix/templates/.default/components/os/compare.result/cosmo/style.css": "source/bitrix/templates/.default/components/os/compare.result/cosmo/style.less",
                    
                    /* просмотренные и избранное */
                    "build/bitrix/templates/.default/components/os/user.custom_items_list/cosmo/style.css": "source/bitrix/templates/.default/components/os/user.custom_items_list/cosmo/style.less",
                    
                    /* страница товара */
                    "build/bitrix/templates/.default/components/os/catalog.element_3.0/cosmo/style.css": "source/bitrix/templates/.default/components/os/catalog.element_3.0/cosmo/style.less",
                    
                    /* совместная покупка */
                    "build/bitrix/templates/.default/components/os/group_buy.detail/cosmo/style.css": "source/bitrix/templates/.default/components/os/group_buy.detail/cosmo/style.less",
                    
                    /* страница оформления заказа */
                    "build/bitrix/components/os/sale.order/templates/test/style.css": "source/bitrix/components/os/sale.order/templates/test/style.less",
                    
                    /* Об интернет-магазине OdinShag.ru */
                    "build/company/about/css/style.css": "source/company/about/css/style.less",
                    
                    /* бонусная программа */
                    "build/discounts/bonus/css/style.css": "source/discounts/bonus/css/style.less",
                    
                    /* лендинг сервис объявлений */
                    "build/add-ads/css/style.css": "source/add-ads/css/style.less",
                    
                    /* страница благодарности о заказе */
                    "build/bitrix/templates/.default/components/os/order_detail_new/cosmo/style.css": "source/bitrix/templates/.default/components/os/order_detail_new/cosmo/style.less",
                    
                    /* страница пункта выдачи */
                    "build/bitrix/templates/.default/components/os/our_pickpoints.detail/cosmo/style.css": "source/bitrix/templates/.default/components/os/our_pickpoints.detail/cosmo/style.less",
                    
                    /* шаблоны оплаты для ПСКБ */
                    "build/pscb/style.css": "source/pscb/style.less",
                    
                    /* условия доставки */
                    "build/services/delivery/css/style.css": "source/services/delivery/css/style.less",
                    
                    /* сотрудничество с магазинами */
                    "build/services/partnership/css/style.css": "source/services/partnership/css/style.less",
                    
                    /* способы оплаты */
                    "build/services/payment/css/style.css": "source/services/payment/css/style.less",
                }
            }
        },
        clean: {
            development: [
                "build/bitrix/templates/cosmo/css/___*" /* удаление временных файлов */
            ]
        }
    });
    /* загружаем плагины */
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-clean'); /* удаление временных файлов */
    /* описываем задачи */
    grunt.registerTask('default', ['less', 'clean']);
};