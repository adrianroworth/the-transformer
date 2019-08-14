const nunjucks = require('nunjucks');
const path = require('path');

function createTransformer() {
    // const fsLoader = new nunjucks.FileSystemLoader([
    //     path.resolve(__dirname, 'views/layouts/'),
    //     path.resolve(__dirname, 'views/pages/'),
    //     path.resolve(__dirname, 'views/partials/')
    // ])
    // const env = new nunjucks.Environment(fsLoader);

    nunjucks.configure([
        path.resolve(__dirname, 'views/layouts/'),
        path.resolve(__dirname, 'views/pages/'),
        path.resolve(__dirname, 'views/partials/')
    ],
    {
        autoescape: true
    });

    function getHtml() {
        return nunjucks.renderString(
            `
                {% extends "default.njk" %}
                {% block body %}
                    {% include 'index.njk' %}
                {% endblock %}
            `
        );
    }

    return Object.freeze({
        getHtml
    });
}

module.exports = createTransformer;