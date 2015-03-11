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
                    
                    /* страница товара */
                    "build/bitrix/templates/.default/components/os/catalog.element_3.0/cosmo/style.css": "source/bitrix/templates/.default/components/os/catalog.element_3.0/cosmo/style.less",
                    
                    /* Об интернет-магазине OdinShag.ru */
                    "build/company/about/css/style.css": "source/company/about/css/style.less"
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